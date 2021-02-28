import * as cxschema from '@alicloud/ros-cdk-assembly-schema';
import * as cxapi from '@alicloud/ros-cdk-cxapi';
import * as childProcess from 'child_process';
import * as fs from 'fs-extra';
import * as path from 'path';
import { debug } from '../logging';
import { Configuration, PROJECT_CONFIG, USER_DEFAULTS } from '../settings';
import { versionNumber } from '../version';
import * as crypto from 'crypto';

/** Invokes the cloud executable and returns JSON output */
export async function execProgram(config: Configuration): Promise<cxapi.CloudAssembly> {
  const env: { [key: string]: string } = {};

  const context = config.context.all;

  debug('context:', context);
  env[cxapi.CONTEXT_ENV] = JSON.stringify(context);

  const app = config.settings.get(['app']);
  if (!app) {
    throw new Error(`--app is required either in command-line, in ${PROJECT_CONFIG} or in ${USER_DEFAULTS}`);
  }

  const commandLine = await guessExecutable(appToArray(app));

  const outdir = config.settings.get(['output']);
  if (!outdir) {
    throw new Error('unexpected: --output is required');
  }
  await fs.mkdirp(outdir);

  debug('outdir:', outdir);
  env[cxapi.OUTDIR_ENV] = outdir;

  // Send version information
  env[cxapi.CLI_ASM_VERSION_ENV] = cxschema.Manifest.version();
  env[cxapi.CLI_VERSION_ENV] = versionNumber();

  debug('env:', env);

  if(ifModify()) {
    await exec();
  }

  return createAssembly(outdir);

  function createAssembly(appDir: string) {
    try {
      return new cxapi.CloudAssembly(appDir);
    } catch (error) {
      if (error.message.includes(cxschema.VERSION_MISMATCH)) {
        // this means the CLI version is too old.
        // we instruct the user to upgrade.
        throw new Error(
          `This CDK CLI is not compatible with the CDK library used by your application. Please upgrade the CLI to the latest version.\n(${error.message})`,
        );
      }
      throw error;
    }
  }

  async function ifModify() {

    const curPath = path.resolve('./');
    const md5Path = curPath + '/.md5';
    let preMd5: string;
    preMd5 = fs.existsSync(md5Path) ? fs.readFileSync(md5Path).toString() : '';

    let pathAndMd5: string[] = [];
    let hasher = crypto.createHash('md5');

    let pkgInfoPath;

    if(fs.existsSync('./tsconfig.json') || fs.existsSync('./package.json')) {
      // when using ts or js to synth
      pkgInfoPath = './package.json';
      const binDir = curPath + '/bin';
      const libDir = curPath + '/lib';
      await readDirForMd5(binDir);
      await readDirForMd5(libDir);
    }
    else if(fs.existsSync('./requirements.txt')) {
      // when using python to synth
      pkgInfoPath = './requirements.txt';
      await readDirForMd5(curPath);
    }
    else if (fs.existsSync('./pom.xml')) {
      // when using java to synth
      pkgInfoPath = './pom.xml';
      const srcDir = curPath + '/src';
      await readDirForMd5(srcDir);
    }
    else {
      // when using c# to synth
      const srcDir = curPath + '/src';
      await readDirForMd5(srcDir);
    }


    pathAndMd5.sort();
    for(let data of pathAndMd5) {
      hasher.update(data);
    }

    // add pkg info to generate md5
    if (pkgInfoPath && fs.existsSync(pkgInfoPath)) {
      let pkg = fs.readFileSync(pkgInfoPath);
      hasher.update(pkg);
    }

    const curMd5 = hasher.digest('hex');
    fs.writeFileSync(md5Path, curMd5);

    return curMd5 !== preMd5;

    async function readDirForMd5(path: string) {
      let arr = fs.readdirSync(path);
      for(let i in arr){
        let stats = fs.statSync(path + '/' + arr[i]);
        if(stats.isFile()){
          let filePath = path + '/' + arr[i];
          let fileContent = fs.readFileSync(filePath);
          let fileMd5 = crypto.createHash('md5').update(fileContent).digest('hex');
          pathAndMd5.push(filePath + ':' + fileMd5);
        }else{
            readDirForMd5(path + '/' + arr[i]);
        }
      }
    }
  }

  async function exec() {
    return new Promise<string | void>((ok, fail) => {
      // We use a slightly lower-level interface to:
      //
      // - Pass arguments in an array instead of a string, to get around a
      //   number of quoting issues introduced by the intermediate shell layer
      //   (which would be different between Linux and Windows).
      //
      // - Inherit stderr from controlling terminal. We don't use the captured value
      //   anyway, and if the subprocess is printing to it for debugging purposes the
      //   user gets to see it sooner. Plus, capturing doesn't interact nicely with some
      //   processes like Maven.
      const proc = childProcess.spawn(commandLine[0], commandLine.slice(1), {
        stdio: ['ignore', 'inherit', 'inherit'],
        detached: false,
        shell: true,
        env: {
          ...process.env,
          ...env,
        },
      });

      proc.on('error', fail);

      proc.on('exit', (code) => {
        if (code === 0) {
          return ok();
        } else {
          return fail(new Error(`Subprocess exited with error ${code}`));
        }
      });
    });
  }
}

/**
 * Make sure the 'app' is an array
 *
 * If it's a string, split on spaces as a trivial way of tokenizing the command line.
 */
function appToArray(app: any) {
  return typeof app === 'string' ? app.split(' ') : app;
}

type CommandGenerator = (file: string) => string[];

/**
 * Execute the given file with the same 'node' process as is running the current process
 */
function executeNode(scriptFile: string): string[] {
  return [process.execPath, scriptFile];
}

/**
 * Mapping of extensions to command-line generators
 */
const EXTENSION_MAP = new Map<string, CommandGenerator>([['.js', executeNode]]);

/**
 * Guess the executable from the command-line argument
 *
 * Only do this if the file is NOT marked as executable. If it is,
 * we'll defer to the shebang inside the file itself.
 *
 * If we're on Windows, we ALWAYS take the handler, since it's hard to
 * verify if registry associations have or have not been set up for this
 * file type, so we'll assume the worst and take control.
 */
async function guessExecutable(commandLine: string[]) {
  if (commandLine.length === 1) {
    let fstat;

    try {
      fstat = await fs.stat(commandLine[0]);
    } catch (error) {
      debug(`Not a file: '${commandLine[0]}'. Using '${commandLine}' as command-line`);
      return commandLine;
    }

    // tslint:disable-next-line:no-bitwise
    const isExecutable = (fstat.mode & fs.constants.X_OK) !== 0;
    const isWindows = process.platform === 'win32';

    const handler = EXTENSION_MAP.get(path.extname(commandLine[0]));
    if (handler && (!isExecutable || isWindows)) {
      return handler(commandLine[0]);
    }
  }
  return commandLine;
}
