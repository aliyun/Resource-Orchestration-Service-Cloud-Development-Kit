"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execProgram = void 0;
const cxschema = require("@alicloud/ros-cdk-assembly-schema");
const cxapi = require("@alicloud/ros-cdk-cxapi");
const childProcess = require("child_process");
const fs = require("fs-extra");
const path = require("path");
const logging_1 = require("../logging");
const settings_1 = require("../settings");
const version_1 = require("../version");
const crypto = require("crypto");
/** Invokes the cloud executable and returns JSON output */
async function execProgram(config) {
    const env = {};
    const context = config.context.all;
    logging_1.debug('context:', context);
    env[cxapi.CONTEXT_ENV] = JSON.stringify(context);
    const app = config.settings.get(['app']);
    if (!app) {
        throw new Error(`--app is required either in command-line, in ${settings_1.PROJECT_CONFIG} or in ${settings_1.USER_DEFAULTS}`);
    }
    const commandLine = await guessExecutable(appToArray(app));
    const outdir = config.settings.get(['output']);
    if (!outdir) {
        throw new Error('unexpected: --output is required');
    }
    await fs.mkdirp(outdir);
    logging_1.debug('outdir:', outdir);
    env[cxapi.OUTDIR_ENV] = outdir;
    // Send version information
    env[cxapi.CLI_ASM_VERSION_ENV] = cxschema.Manifest.version();
    env[cxapi.CLI_VERSION_ENV] = version_1.versionNumber();
    logging_1.debug('env:', env);
    if (ifModify()) {
        await exec();
    }
    return createAssembly(outdir);
    function createAssembly(appDir) {
        try {
            return new cxapi.CloudAssembly(appDir);
        }
        catch (error) {
            if (error.message.includes(cxschema.VERSION_MISMATCH)) {
                // this means the CLI version is too old.
                // we instruct the user to upgrade.
                throw new Error(`This CDK CLI is not compatible with the CDK library used by your application. Please upgrade the CLI to the latest version.\n(${error.message})`);
            }
            throw error;
        }
    }
    async function ifModify() {
        const curPath = path.resolve('./');
        const md5Path = curPath + '/.md5';
        let preMd5;
        preMd5 = fs.existsSync(md5Path) ? fs.readFileSync(md5Path).toString() : '';
        let pathAndMd5 = [];
        let hasher = crypto.createHash('md5');
        let pkgInfoPath;
        if (fs.existsSync('./package.json')) {
            // when using ts to synth
            pkgInfoPath = './package.json';
            const binDir = curPath + '/bin';
            const libDir = curPath + '/lib';
            await readDirForMd5(binDir);
            await readDirForMd5(libDir);
        }
        else {
            // when using java to synth
            pkgInfoPath = './pom.xml';
            const srcDir = curPath + '/src';
            await readDirForMd5(srcDir);
        }
        pathAndMd5.sort();
        for (let data of pathAndMd5) {
            hasher.update(data);
        }
        // add pkg info to generate md5
        if (fs.existsSync(pkgInfoPath)) {
            let pkg = fs.readFileSync(pkgInfoPath);
            hasher.update(pkg);
        }
        const curMd5 = hasher.digest('hex');
        fs.writeFileSync(md5Path, curMd5);
        return curMd5 !== preMd5;
        async function readDirForMd5(path) {
            let arr = fs.readdirSync(path);
            for (let i in arr) {
                let stats = fs.statSync(path + '/' + arr[i]);
                if (stats.isFile()) {
                    let filePath = path + '/' + arr[i];
                    let fileContent = fs.readFileSync(filePath);
                    let fileMd5 = crypto.createHash('md5').update(fileContent).digest('hex');
                    pathAndMd5.push(filePath + ':' + fileMd5);
                }
                else {
                    readDirForMd5(path + '/' + arr[i]);
                }
            }
        }
    }
    async function exec() {
        return new Promise((ok, fail) => {
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
                }
                else {
                    return fail(new Error(`Subprocess exited with error ${code}`));
                }
            });
        });
    }
}
exports.execProgram = execProgram;
/**
 * Make sure the 'app' is an array
 *
 * If it's a string, split on spaces as a trivial way of tokenizing the command line.
 */
function appToArray(app) {
    return typeof app === 'string' ? app.split(' ') : app;
}
/**
 * Execute the given file with the same 'node' process as is running the current process
 */
function executeNode(scriptFile) {
    return [process.execPath, scriptFile];
}
/**
 * Mapping of extensions to command-line generators
 */
const EXTENSION_MAP = new Map([['.js', executeNode]]);
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
async function guessExecutable(commandLine) {
    if (commandLine.length === 1) {
        let fstat;
        try {
            fstat = await fs.stat(commandLine[0]);
        }
        catch (error) {
            logging_1.debug(`Not a file: '${commandLine[0]}'. Using '${commandLine}' as command-line`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4ZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQThEO0FBQzlELGlEQUFpRDtBQUNqRCw4Q0FBOEM7QUFDOUMsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qix3Q0FBbUM7QUFDbkMsMENBQTJFO0FBQzNFLHdDQUEyQztBQUMzQyxpQ0FBaUM7QUFFakMsMkRBQTJEO0FBQ3BELEtBQUssVUFBVSxXQUFXLENBQUMsTUFBcUI7SUFDckQsTUFBTSxHQUFHLEdBQThCLEVBQUUsQ0FBQztJQUUxQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUVuQyxlQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELHlCQUFjLFVBQVUsd0JBQWEsRUFBRSxDQUFDLENBQUM7S0FDMUc7SUFFRCxNQUFNLFdBQVcsR0FBRyxNQUFNLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUUzRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0MsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztLQUNyRDtJQUNELE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV4QixlQUFLLENB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RUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFaEY7Ozs7Ozs7OztHQVNHO0FBQ0gsS0FBSyxVQUFVLGVBQWUsQ0FBQyxXQUFxQjtJQUNsRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzVCLElBQUksS0FBSyxDQUFDO1FBRVYsSUFBSTtZQUNGLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLGVBQUssQ0FBQyxnQkFBZ0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxhQUFhLFdBQVcsbUJBQW1CLENBQUMsQ0FBQztZQUNqRixPQUFPLFdBQVcsQ0FBQztTQUNwQjtRQUVELHNDQUFzQztRQUN0QyxNQUFNLFlBQVksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUM7UUFFL0MsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsRUFBRTtZQUMzQyxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQztLQUNGO0lBQ0QsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4c2NoZW1hIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWFzc2VtYmx5LXNjaGVtYSc7XG5pbXBvcnQgKiBhcyBjeGFwaSBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jeGFwaSc7XG5pbXBvcnQgKiBhcyBjaGlsZFByb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICcuLi9sb2dnaW5nJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24sIFBST0pFQ1RfQ09ORklHLCBVU0VSX0RFRkFVTFRTIH0gZnJvbSAnLi4vc2V0dGluZ3MnO1xuaW1wb3J0IHsgdmVyc2lvbk51bWJlciB9IGZyb20gJy4uL3ZlcnNpb24nO1xuaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5cbi8qKiBJbnZva2VzIHRoZSBjbG91ZCBleGVjdXRhYmxlIGFuZCByZXR1cm5zIEpTT04gb3V0cHV0ICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY1Byb2dyYW0oY29uZmlnOiBDb25maWd1cmF0aW9uKTogUHJvbWlzZTxjeGFwaS5DbG91ZEFzc2VtYmx5PiB7XG4gIGNvbnN0IGVudjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIGNvbnN0IGNvbnRleHQgPSBjb25maWcuY29udGV4dC5hbGw7XG5cbiAgZGVidWcoJ2NvbnRleHQ6JywgY29udGV4dCk7XG4gIGVudltjeGFwaS5DT05URVhUX0VOVl0gPSBKU09OLnN0cmluZ2lmeShjb250ZXh0KTtcblxuICBjb25zdCBhcHAgPSBjb25maWcuc2V0dGluZ3MuZ2V0KFsnYXBwJ10pO1xuICBpZiAoIWFwcCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgLS1hcHAgaXMgcmVxdWlyZWQgZWl0aGVyIGluIGNvbW1hbmQtbGluZSwgaW4gJHtQUk9KRUNUX0NPTkZJR30gb3IgaW4gJHtVU0VSX0RFRkFVTFRTfWApO1xuICB9XG5cbiAgY29uc3QgY29tbWFuZExpbmUgPSBhd2FpdCBndWVzc0V4ZWN1dGFibGUoYXBwVG9BcnJheShhcHApKTtcblxuICBjb25zdCBvdXRkaXIgPSBjb25maWcuc2V0dGluZ3MuZ2V0KFsnb3V0cHV0J10pO1xuICBpZiAoIW91dGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigndW5leHBlY3RlZDogLS1vdXRwdXQgaXMgcmVxdWlyZWQnKTtcbiAgfVxuICBhd2FpdCBmcy5ta2RpcnAob3V0ZGlyKTtcblxuICBkZWJ1Zygnb3V0ZGlyOicsIG91dGRpcik7XG4gIGVudltjeGFwaS5PVVRESVJfRU5WXSA9IG91dGRpcjtcblxuICAvLyBTZW5kIHZlcnNpb24gaW5mb3JtYXRpb25cbiAgZW52W2N4YXBpLkNMSV9BU01fVkVSU0lPTl9FTlZdID0gY3hzY2hlbWEuTWFuaWZlc3QudmVyc2lvbigpO1xuICBlbnZbY3hhcGkuQ0xJX1ZFUlNJT05fRU5WXSA9IHZlcnNpb25OdW1iZXIoKTtcblxuICBkZWJ1ZygnZW52OicsIGVudik7XG5cbiAgaWYoaWZNb2RpZnkoKSkge1xuICAgIGF3YWl0IGV4ZWMoKTtcbiAgfVxuICBcbiAgcmV0dXJuIGNyZWF0ZUFzc2VtYmx5KG91dGRpcik7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXNzZW1ibHkoYXBwRGlyOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG5ldyBjeGFwaS5DbG91ZEFzc2VtYmx5KGFwcERpcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlLmluY2x1ZGVzKGN4c2NoZW1hLlZFUlNJT05fTUlTTUFUQ0gpKSB7XG4gICAgICAgIC8vIHRoaXMgbWVhbnMgdGhlIENMSSB2ZXJzaW9uIGlzIHRvbyBvbGQuXG4gICAgICAgIC8vIHdlIGluc3RydWN0IHRoZSB1c2VyIHRvIHVwZ3JhZGUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgVGhpcyBDREsgQ0xJIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIENESyBsaWJyYXJ5IHVzZWQgYnkgeW91ciBhcHBsaWNhdGlvbi4gUGxlYXNlIHVwZ3JhZGUgdGhlIENMSSB0byB0aGUgbGF0ZXN0IHZlcnNpb24uXFxuKCR7ZXJyb3IubWVzc2FnZX0pYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGlmTW9kaWZ5KCkge1xuXG4gICAgY29uc3QgY3VyUGF0aCA9IHBhdGgucmVzb2x2ZSgnLi8nKTtcbiAgICBjb25zdCBtZDVQYXRoID0gY3VyUGF0aCArICcvLm1kNSc7XG4gICAgbGV0IHByZU1kNTogc3RyaW5nO1xuICAgIHByZU1kNSA9IGZzLmV4aXN0c1N5bmMobWQ1UGF0aCkgPyBmcy5yZWFkRmlsZVN5bmMobWQ1UGF0aCkudG9TdHJpbmcoKSA6ICcnO1xuXG4gICAgbGV0IHBhdGhBbmRNZDU6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IGhhc2hlciA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKTtcblxuICAgIGxldCBwa2dJbmZvUGF0aDtcblxuICAgIGlmKGZzLmV4aXN0c1N5bmMoJy4vcGFja2FnZS5qc29uJykpIHtcbiAgICAgIC8vIHdoZW4gdXNpbmcgdHMgdG8gc3ludGhcbiAgICAgIHBrZ0luZm9QYXRoID0gJy4vcGFja2FnZS5qc29uJztcbiAgICAgIGNvbnN0IGJpbkRpciA9IGN1clBhdGggKyAnL2Jpbic7XG4gICAgICBjb25zdCBsaWJEaXIgPSBjdXJQYXRoICsgJy9saWInO1xuICAgICAgYXdhaXQgcmVhZERpckZvck1kNShiaW5EaXIpO1xuICAgICAgYXdhaXQgcmVhZERpckZvck1kNShsaWJEaXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3aGVuIHVzaW5nIGphdmEgdG8gc3ludGhcbiAgICAgIHBrZ0luZm9QYXRoID0gJy4vcG9tLnhtbCc7XG4gICAgICBjb25zdCBzcmNEaXIgPSBjdXJQYXRoICsgJy9zcmMnO1xuICAgICAgYXdhaXQgcmVhZERpckZvck1kNShzcmNEaXIpO1xuICAgIH1cbiAgICBcblxuICAgIHBhdGhBbmRNZDUuc29ydCgpO1xuICAgIGZvcihsZXQgZGF0YSBvZiBwYXRoQW5kTWQ1KSB7XG4gICAgICBoYXNoZXIudXBkYXRlKGRhdGEpO1xuICAgIH1cbiAgICBcbiAgICAvLyBhZGQgcGtnIGluZm8gdG8gZ2VuZXJhdGUgbWQ1XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMocGtnSW5mb1BhdGgpKSB7XG4gICAgICBsZXQgcGtnID0gZnMucmVhZEZpbGVTeW5jKHBrZ0luZm9QYXRoKTsgICBcbiAgICAgIGhhc2hlci51cGRhdGUocGtnKTtcbiAgICB9ICBcblxuICAgIGNvbnN0IGN1ck1kNSA9IGhhc2hlci5kaWdlc3QoJ2hleCcpO1xuICAgIGZzLndyaXRlRmlsZVN5bmMobWQ1UGF0aCwgY3VyTWQ1KTtcbiAgICBcbiAgICByZXR1cm4gY3VyTWQ1ICE9PSBwcmVNZDU7XG4gICAgXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVhZERpckZvck1kNShwYXRoOiBzdHJpbmcpIHtcbiAgICAgIGxldCBhcnIgPSBmcy5yZWFkZGlyU3luYyhwYXRoKTtcbiAgICAgIGZvcihsZXQgaSBpbiBhcnIpe1xuICAgICAgICBsZXQgc3RhdHMgPSBmcy5zdGF0U3luYyhwYXRoICsgJy8nICsgYXJyW2ldKTtcbiAgICAgICAgaWYoc3RhdHMuaXNGaWxlKCkpe1xuICAgICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGggKyAnLycgKyBhcnJbaV07XG4gICAgICAgICAgbGV0IGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcbiAgICAgICAgICBsZXQgZmlsZU1kNSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoZmlsZUNvbnRlbnQpLmRpZ2VzdCgnaGV4Jyk7XG4gICAgICAgICAgcGF0aEFuZE1kNS5wdXNoKGZpbGVQYXRoICsgJzonICsgZmlsZU1kNSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVhZERpckZvck1kNShwYXRoICsgJy8nICsgYXJyW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKG9rLCBmYWlsKSA9PiB7XG4gICAgICAvLyBXZSB1c2UgYSBzbGlnaHRseSBsb3dlci1sZXZlbCBpbnRlcmZhY2UgdG86XG4gICAgICAvL1xuICAgICAgLy8gLSBQYXNzIGFyZ3VtZW50cyBpbiBhbiBhcnJheSBpbnN0ZWFkIG9mIGEgc3RyaW5nLCB0byBnZXQgYXJvdW5kIGFcbiAgICAgIC8vICAgbnVtYmVyIG9mIHF1b3RpbmcgaXNzdWVzIGludHJvZHVjZWQgYnkgdGhlIGludGVybWVkaWF0ZSBzaGVsbCBsYXllclxuICAgICAgLy8gICAod2hpY2ggd291bGQgYmUgZGlmZmVyZW50IGJldHdlZW4gTGludXggYW5kIFdpbmRvd3MpLlxuICAgICAgLy9cbiAgICAgIC8vIC0gSW5oZXJpdCBzdGRlcnIgZnJvbSBjb250cm9sbGluZyB0ZXJtaW5hbC4gV2UgZG9uJ3QgdXNlIHRoZSBjYXB0dXJlZCB2YWx1ZVxuICAgICAgLy8gICBhbnl3YXksIGFuZCBpZiB0aGUgc3VicHJvY2VzcyBpcyBwcmludGluZyB0byBpdCBmb3IgZGVidWdnaW5nIHB1cnBvc2VzIHRoZVxuICAgICAgLy8gICB1c2VyIGdldHMgdG8gc2VlIGl0IHNvb25lci4gUGx1cywgY2FwdHVyaW5nIGRvZXNuJ3QgaW50ZXJhY3QgbmljZWx5IHdpdGggc29tZVxuICAgICAgLy8gICBwcm9jZXNzZXMgbGlrZSBNYXZlbi5cbiAgICAgIGNvbnN0IHByb2MgPSBjaGlsZFByb2Nlc3Muc3Bhd24oY29tbWFuZExpbmVbMF0sIGNvbW1hbmRMaW5lLnNsaWNlKDEpLCB7XG4gICAgICAgIHN0ZGlvOiBbJ2lnbm9yZScsICdpbmhlcml0JywgJ2luaGVyaXQnXSxcbiAgICAgICAgZGV0YWNoZWQ6IGZhbHNlLFxuICAgICAgICBzaGVsbDogdHJ1ZSxcbiAgICAgICAgZW52OiB7XG4gICAgICAgICAgLi4ucHJvY2Vzcy5lbnYsXG4gICAgICAgICAgLi4uZW52LFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHByb2Mub24oJ2Vycm9yJywgZmFpbCk7XG5cbiAgICAgIHByb2Mub24oJ2V4aXQnLCAoY29kZSkgPT4ge1xuICAgICAgICBpZiAoY29kZSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBvaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWlsKG5ldyBFcnJvcihgU3VicHJvY2VzcyBleGl0ZWQgd2l0aCBlcnJvciAke2NvZGV9YCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIE1ha2Ugc3VyZSB0aGUgJ2FwcCcgaXMgYW4gYXJyYXlcbiAqXG4gKiBJZiBpdCdzIGEgc3RyaW5nLCBzcGxpdCBvbiBzcGFjZXMgYXMgYSB0cml2aWFsIHdheSBvZiB0b2tlbml6aW5nIHRoZSBjb21tYW5kIGxpbmUuXG4gKi9cbmZ1bmN0aW9uIGFwcFRvQXJyYXkoYXBwOiBhbnkpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcHAgPT09ICdzdHJpbmcnID8gYXBwLnNwbGl0KCcgJykgOiBhcHA7XG59XG5cbnR5cGUgQ29tbWFuZEdlbmVyYXRvciA9IChmaWxlOiBzdHJpbmcpID0+IHN0cmluZ1tdO1xuXG4vKipcbiAqIEV4ZWN1dGUgdGhlIGdpdmVuIGZpbGUgd2l0aCB0aGUgc2FtZSAnbm9kZScgcHJvY2VzcyBhcyBpcyBydW5uaW5nIHRoZSBjdXJyZW50IHByb2Nlc3NcbiAqL1xuZnVuY3Rpb24gZXhlY3V0ZU5vZGUoc2NyaXB0RmlsZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gW3Byb2Nlc3MuZXhlY1BhdGgsIHNjcmlwdEZpbGVdO1xufVxuXG4vKipcbiAqIE1hcHBpbmcgb2YgZXh0ZW5zaW9ucyB0byBjb21tYW5kLWxpbmUgZ2VuZXJhdG9yc1xuICovXG5jb25zdCBFWFRFTlNJT05fTUFQID0gbmV3IE1hcDxzdHJpbmcsIENvbW1hbmRHZW5lcmF0b3I+KFtbJy5qcycsIGV4ZWN1dGVOb2RlXV0pO1xuXG4vKipcbiAqIEd1ZXNzIHRoZSBleGVjdXRhYmxlIGZyb20gdGhlIGNvbW1hbmQtbGluZSBhcmd1bWVudFxuICpcbiAqIE9ubHkgZG8gdGhpcyBpZiB0aGUgZmlsZSBpcyBOT1QgbWFya2VkIGFzIGV4ZWN1dGFibGUuIElmIGl0IGlzLFxuICogd2UnbGwgZGVmZXIgdG8gdGhlIHNoZWJhbmcgaW5zaWRlIHRoZSBmaWxlIGl0c2VsZi5cbiAqXG4gKiBJZiB3ZSdyZSBvbiBXaW5kb3dzLCB3ZSBBTFdBWVMgdGFrZSB0aGUgaGFuZGxlciwgc2luY2UgaXQncyBoYXJkIHRvXG4gKiB2ZXJpZnkgaWYgcmVnaXN0cnkgYXNzb2NpYXRpb25zIGhhdmUgb3IgaGF2ZSBub3QgYmVlbiBzZXQgdXAgZm9yIHRoaXNcbiAqIGZpbGUgdHlwZSwgc28gd2UnbGwgYXNzdW1lIHRoZSB3b3JzdCBhbmQgdGFrZSBjb250cm9sLlxuICovXG5hc3luYyBmdW5jdGlvbiBndWVzc0V4ZWN1dGFibGUoY29tbWFuZExpbmU6IHN0cmluZ1tdKSB7XG4gIGlmIChjb21tYW5kTGluZS5sZW5ndGggPT09IDEpIHtcbiAgICBsZXQgZnN0YXQ7XG5cbiAgICB0cnkge1xuICAgICAgZnN0YXQgPSBhd2FpdCBmcy5zdGF0KGNvbW1hbmRMaW5lWzBdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGVidWcoYE5vdCBhIGZpbGU6ICcke2NvbW1hbmRMaW5lWzBdfScuIFVzaW5nICcke2NvbW1hbmRMaW5lfScgYXMgY29tbWFuZC1saW5lYCk7XG4gICAgICByZXR1cm4gY29tbWFuZExpbmU7XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICBjb25zdCBpc0V4ZWN1dGFibGUgPSAoZnN0YXQubW9kZSAmIGZzLmNvbnN0YW50cy5YX09LKSAhPT0gMDtcbiAgICBjb25zdCBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xuXG4gICAgY29uc3QgaGFuZGxlciA9IEVYVEVOU0lPTl9NQVAuZ2V0KHBhdGguZXh0bmFtZShjb21tYW5kTGluZVswXSkpO1xuICAgIGlmIChoYW5kbGVyICYmICghaXNFeGVjdXRhYmxlIHx8IGlzV2luZG93cykpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyKGNvbW1hbmRMaW5lWzBdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbW1hbmRMaW5lO1xufVxuIl19