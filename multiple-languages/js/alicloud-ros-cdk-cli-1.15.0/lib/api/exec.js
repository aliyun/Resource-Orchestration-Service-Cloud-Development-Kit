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
    (0, logging_1.debug)('context:', context);
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
    (0, logging_1.debug)('outdir:', outdir);
    env[cxapi.OUTDIR_ENV] = outdir;
    // Send version information
    env[cxapi.CLI_ASM_VERSION_ENV] = cxschema.Manifest.version();
    env[cxapi.CLI_VERSION_ENV] = (0, version_1.versionNumber)();
    (0, logging_1.debug)('env:', env);
    if (await ifModify()) {
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
        if (fs.existsSync('./tsconfig.json') || fs.existsSync('./package.json')) {
            // when using ts or js to synth
            pkgInfoPath = './package.json';
            const binDir = curPath + '/bin';
            const libDir = curPath + '/lib';
            await readDirForMd5(binDir);
            await readDirForMd5(libDir);
        }
        else if (fs.existsSync('./requirements.txt')) {
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
        else if (fs.existsSync('./global.sln')) {
            // when using c# to synth
            pkgInfoPath = './global.sln';
            const srcDir = curPath + '/src';
            await readDirForMd5(srcDir);
        }
        else if (fs.existsSync('./go.mod')) {
            // when using go to synth
            pkgInfoPath = './go.mod';
            await readDirForMd5(curPath);
        }
        else {
            throw new Error('This CDK CLI init project is not allowed, please check project directory information');
        }
        pathAndMd5.sort();
        for (let data of pathAndMd5) {
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
            (0, logging_1.debug)(`Not a file: '${commandLine[0]}'. Using '${commandLine}' as command-line`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4ZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQThEO0FBQzlELGlEQUFpRDtBQUNqRCw4Q0FBOEM7QUFDOUMsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qix3Q0FBbUM7QUFDbkMsMENBQTJFO0FBQzNFLHdDQUEyQztBQUMzQyxpQ0FBaUM7QUFFakMsMkRBQTJEO0FBQ3BELEtBQUssVUFBVSxXQUFXLENBQUMsTUFBcUI7SUFDckQsTUFBTSxHQUFHLEdBQThCLEVBQUUsQ0FBQztJQUUxQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUVuQyxJQUFBLGVBQUssRUFBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWpELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6QyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBZ0QseUJBQWMsVUFBVSx3QkFBYSxFQUFFLENBQUMsQ0FBQztLQUMxRztJQUVELE1BQU0sV0FBVyxHQUFHLE1BQU0sZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRTNELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMvQyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0tBQ3JEO0lBQ0QsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXhCLElB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bUIsQ0FBQyxDQUFDO1lBQ2pGLE9BQU8sV0FBVyxDQUFDO1NBQ3BCO1FBRUQsc0NBQXNDO1FBQ3RDLE1BQU0sWUFBWSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQztRQUUvQyxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsWUFBWSxJQUFJLFNBQVMsQ0FBQyxFQUFFO1lBQzNDLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO0tBQ0Y7SUFDRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hzY2hlbWEgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstYXNzZW1ibHktc2NoZW1hJztcbmltcG9ydCAqIGFzIGN4YXBpIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWN4YXBpJztcbmltcG9ydCAqIGFzIGNoaWxkUHJvY2VzcyBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJy4uL2xvZ2dpbmcnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgUFJPSkVDVF9DT05GSUcsIFVTRVJfREVGQVVMVFMgfSBmcm9tICcuLi9zZXR0aW5ncyc7XG5pbXBvcnQgeyB2ZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi4vdmVyc2lvbic7XG5pbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuLyoqIEludm9rZXMgdGhlIGNsb3VkIGV4ZWN1dGFibGUgYW5kIHJldHVybnMgSlNPTiBvdXRwdXQgKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjUHJvZ3JhbShjb25maWc6IENvbmZpZ3VyYXRpb24pOiBQcm9taXNlPGN4YXBpLkNsb3VkQXNzZW1ibHk+IHtcbiAgY29uc3QgZW52OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgY29uc3QgY29udGV4dCA9IGNvbmZpZy5jb250ZXh0LmFsbDtcblxuICBkZWJ1ZygnY29udGV4dDonLCBjb250ZXh0KTtcbiAgZW52W2N4YXBpLkNPTlRFWFRfRU5WXSA9IEpTT04uc3RyaW5naWZ5KGNvbnRleHQpO1xuXG4gIGNvbnN0IGFwcCA9IGNvbmZpZy5zZXR0aW5ncy5nZXQoWydhcHAnXSk7XG4gIGlmICghYXBwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAtLWFwcCBpcyByZXF1aXJlZCBlaXRoZXIgaW4gY29tbWFuZC1saW5lLCBpbiAke1BST0pFQ1RfQ09ORklHfSBvciBpbiAke1VTRVJfREVGQVVMVFN9YCk7XG4gIH1cblxuICBjb25zdCBjb21tYW5kTGluZSA9IGF3YWl0IGd1ZXNzRXhlY3V0YWJsZShhcHBUb0FycmF5KGFwcCkpO1xuXG4gIGNvbnN0IG91dGRpciA9IGNvbmZpZy5zZXR0aW5ncy5nZXQoWydvdXRwdXQnXSk7XG4gIGlmICghb3V0ZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1bmV4cGVjdGVkOiAtLW91dHB1dCBpcyByZXF1aXJlZCcpO1xuICB9XG4gIGF3YWl0IGZzLm1rZGlycChvdXRkaXIpO1xuXG4gIGRlYnVnKCdvdXRkaXI6Jywgb3V0ZGlyKTtcbiAgZW52W2N4YXBpLk9VVERJUl9FTlZdID0gb3V0ZGlyO1xuXG4gIC8vIFNlbmQgdmVyc2lvbiBpbmZvcm1hdGlvblxuICBlbnZbY3hhcGkuQ0xJX0FTTV9WRVJTSU9OX0VOVl0gPSBjeHNjaGVtYS5NYW5pZmVzdC52ZXJzaW9uKCk7XG4gIGVudltjeGFwaS5DTElfVkVSU0lPTl9FTlZdID0gdmVyc2lvbk51bWJlcigpO1xuXG4gIGRlYnVnKCdlbnY6JywgZW52KTtcblxuICBpZihhd2FpdCBpZk1vZGlmeSgpKSB7XG4gICAgYXdhaXQgZXhlYygpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUFzc2VtYmx5KG91dGRpcik7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXNzZW1ibHkoYXBwRGlyOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG5ldyBjeGFwaS5DbG91ZEFzc2VtYmx5KGFwcERpcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlLmluY2x1ZGVzKGN4c2NoZW1hLlZFUlNJT05fTUlTTUFUQ0gpKSB7XG4gICAgICAgIC8vIHRoaXMgbWVhbnMgdGhlIENMSSB2ZXJzaW9uIGlzIHRvbyBvbGQuXG4gICAgICAgIC8vIHdlIGluc3RydWN0IHRoZSB1c2VyIHRvIHVwZ3JhZGUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgVGhpcyBDREsgQ0xJIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIENESyBsaWJyYXJ5IHVzZWQgYnkgeW91ciBhcHBsaWNhdGlvbi4gUGxlYXNlIHVwZ3JhZGUgdGhlIENMSSB0byB0aGUgbGF0ZXN0IHZlcnNpb24uXFxuKCR7ZXJyb3IubWVzc2FnZX0pYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGlmTW9kaWZ5KCkge1xuXG4gICAgY29uc3QgY3VyUGF0aCA9IHBhdGgucmVzb2x2ZSgnLi8nKTtcbiAgICBjb25zdCBtZDVQYXRoID0gY3VyUGF0aCArICcvLm1kNSc7XG4gICAgbGV0IHByZU1kNTogc3RyaW5nO1xuICAgIHByZU1kNSA9IGZzLmV4aXN0c1N5bmMobWQ1UGF0aCkgPyBmcy5yZWFkRmlsZVN5bmMobWQ1UGF0aCkudG9TdHJpbmcoKSA6ICcnO1xuXG4gICAgbGV0IHBhdGhBbmRNZDU6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IGhhc2hlciA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKTtcblxuICAgIGxldCBwa2dJbmZvUGF0aDtcblxuICAgIGlmKGZzLmV4aXN0c1N5bmMoJy4vdHNjb25maWcuanNvbicpIHx8IGZzLmV4aXN0c1N5bmMoJy4vcGFja2FnZS5qc29uJykpIHtcbiAgICAgIC8vIHdoZW4gdXNpbmcgdHMgb3IganMgdG8gc3ludGhcbiAgICAgIHBrZ0luZm9QYXRoID0gJy4vcGFja2FnZS5qc29uJztcbiAgICAgIGNvbnN0IGJpbkRpciA9IGN1clBhdGggKyAnL2Jpbic7XG4gICAgICBjb25zdCBsaWJEaXIgPSBjdXJQYXRoICsgJy9saWInO1xuICAgICAgYXdhaXQgcmVhZERpckZvck1kNShiaW5EaXIpO1xuICAgICAgYXdhaXQgcmVhZERpckZvck1kNShsaWJEaXIpO1xuICAgIH1cbiAgICBlbHNlIGlmKGZzLmV4aXN0c1N5bmMoJy4vcmVxdWlyZW1lbnRzLnR4dCcpKSB7XG4gICAgICAvLyB3aGVuIHVzaW5nIHB5dGhvbiB0byBzeW50aFxuICAgICAgcGtnSW5mb1BhdGggPSAnLi9yZXF1aXJlbWVudHMudHh0JztcbiAgICAgIGF3YWl0IHJlYWREaXJGb3JNZDUoY3VyUGF0aCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZzLmV4aXN0c1N5bmMoJy4vcG9tLnhtbCcpKSB7XG4gICAgICAvLyB3aGVuIHVzaW5nIGphdmEgdG8gc3ludGhcbiAgICAgIHBrZ0luZm9QYXRoID0gJy4vcG9tLnhtbCc7XG4gICAgICBjb25zdCBzcmNEaXIgPSBjdXJQYXRoICsgJy9zcmMnO1xuICAgICAgYXdhaXQgcmVhZERpckZvck1kNShzcmNEaXIpO1xuICAgIH1cbiAgICBlbHNlIGlmKGZzLmV4aXN0c1N5bmMoJy4vZ2xvYmFsLnNsbicpKSB7XG4gICAgICAvLyB3aGVuIHVzaW5nIGMjIHRvIHN5bnRoXG4gICAgICBwa2dJbmZvUGF0aCA9ICcuL2dsb2JhbC5zbG4nO1xuICAgICAgY29uc3Qgc3JjRGlyID0gY3VyUGF0aCArICcvc3JjJztcbiAgICAgIGF3YWl0IHJlYWREaXJGb3JNZDUoc3JjRGlyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZnMuZXhpc3RzU3luYygnLi9nby5tb2QnKSkge1xuICAgICAgLy8gd2hlbiB1c2luZyBnbyB0byBzeW50aFxuICAgICAgcGtnSW5mb1BhdGggPSAnLi9nby5tb2QnO1xuICAgICAgYXdhaXQgcmVhZERpckZvck1kNShjdXJQYXRoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgQ0RLIENMSSBpbml0IHByb2plY3QgaXMgbm90IGFsbG93ZWQsIHBsZWFzZSBjaGVjayBwcm9qZWN0IGRpcmVjdG9yeSBpbmZvcm1hdGlvbicpO1xuICAgIH1cblxuXG4gICAgcGF0aEFuZE1kNS5zb3J0KCk7XG4gICAgZm9yKGxldCBkYXRhIG9mIHBhdGhBbmRNZDUpIHtcbiAgICAgIGhhc2hlci51cGRhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHBrZyBpbmZvIHRvIGdlbmVyYXRlIG1kNVxuICAgIGlmIChwa2dJbmZvUGF0aCAmJiBmcy5leGlzdHNTeW5jKHBrZ0luZm9QYXRoKSkge1xuICAgICAgbGV0IHBrZyA9IGZzLnJlYWRGaWxlU3luYyhwa2dJbmZvUGF0aCk7XG4gICAgICBoYXNoZXIudXBkYXRlKHBrZyk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VyTWQ1ID0gaGFzaGVyLmRpZ2VzdCgnaGV4Jyk7XG4gICAgZnMud3JpdGVGaWxlU3luYyhtZDVQYXRoLCBjdXJNZDUpO1xuXG4gICAgcmV0dXJuIGN1ck1kNSAhPT0gcHJlTWQ1O1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVhZERpckZvck1kNShwYXRoOiBzdHJpbmcpIHtcbiAgICAgIGxldCBhcnIgPSBmcy5yZWFkZGlyU3luYyhwYXRoKTtcbiAgICAgIGZvcihsZXQgaSBpbiBhcnIpe1xuICAgICAgICBsZXQgc3RhdHMgPSBmcy5zdGF0U3luYyhwYXRoICsgJy8nICsgYXJyW2ldKTtcbiAgICAgICAgaWYoc3RhdHMuaXNGaWxlKCkpe1xuICAgICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGggKyAnLycgKyBhcnJbaV07XG4gICAgICAgICAgbGV0IGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcbiAgICAgICAgICBsZXQgZmlsZU1kNSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoZmlsZUNvbnRlbnQpLmRpZ2VzdCgnaGV4Jyk7XG4gICAgICAgICAgcGF0aEFuZE1kNS5wdXNoKGZpbGVQYXRoICsgJzonICsgZmlsZU1kNSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVhZERpckZvck1kNShwYXRoICsgJy8nICsgYXJyW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZyB8IHZvaWQ+KChvaywgZmFpbCkgPT4ge1xuICAgICAgLy8gV2UgdXNlIGEgc2xpZ2h0bHkgbG93ZXItbGV2ZWwgaW50ZXJmYWNlIHRvOlxuICAgICAgLy9cbiAgICAgIC8vIC0gUGFzcyBhcmd1bWVudHMgaW4gYW4gYXJyYXkgaW5zdGVhZCBvZiBhIHN0cmluZywgdG8gZ2V0IGFyb3VuZCBhXG4gICAgICAvLyAgIG51bWJlciBvZiBxdW90aW5nIGlzc3VlcyBpbnRyb2R1Y2VkIGJ5IHRoZSBpbnRlcm1lZGlhdGUgc2hlbGwgbGF5ZXJcbiAgICAgIC8vICAgKHdoaWNoIHdvdWxkIGJlIGRpZmZlcmVudCBiZXR3ZWVuIExpbnV4IGFuZCBXaW5kb3dzKS5cbiAgICAgIC8vXG4gICAgICAvLyAtIEluaGVyaXQgc3RkZXJyIGZyb20gY29udHJvbGxpbmcgdGVybWluYWwuIFdlIGRvbid0IHVzZSB0aGUgY2FwdHVyZWQgdmFsdWVcbiAgICAgIC8vICAgYW55d2F5LCBhbmQgaWYgdGhlIHN1YnByb2Nlc3MgaXMgcHJpbnRpbmcgdG8gaXQgZm9yIGRlYnVnZ2luZyBwdXJwb3NlcyB0aGVcbiAgICAgIC8vICAgdXNlciBnZXRzIHRvIHNlZSBpdCBzb29uZXIuIFBsdXMsIGNhcHR1cmluZyBkb2Vzbid0IGludGVyYWN0IG5pY2VseSB3aXRoIHNvbWVcbiAgICAgIC8vICAgcHJvY2Vzc2VzIGxpa2UgTWF2ZW4uXG4gICAgICBjb25zdCBwcm9jID0gY2hpbGRQcm9jZXNzLnNwYXduKGNvbW1hbmRMaW5lWzBdLCBjb21tYW5kTGluZS5zbGljZSgxKSwge1xuICAgICAgICBzdGRpbzogWydpZ25vcmUnLCAnaW5oZXJpdCcsICdpbmhlcml0J10sXG4gICAgICAgIGRldGFjaGVkOiBmYWxzZSxcbiAgICAgICAgc2hlbGw6IHRydWUsXG4gICAgICAgIGVudjoge1xuICAgICAgICAgIC4uLnByb2Nlc3MuZW52LFxuICAgICAgICAgIC4uLmVudixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBwcm9jLm9uKCdlcnJvcicsIGZhaWwpO1xuXG4gICAgICBwcm9jLm9uKCdleGl0JywgKGNvZGUpID0+IHtcbiAgICAgICAgaWYgKGNvZGUgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gb2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFpbChuZXcgRXJyb3IoYFN1YnByb2Nlc3MgZXhpdGVkIHdpdGggZXJyb3IgJHtjb2RlfWApKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBNYWtlIHN1cmUgdGhlICdhcHAnIGlzIGFuIGFycmF5XG4gKlxuICogSWYgaXQncyBhIHN0cmluZywgc3BsaXQgb24gc3BhY2VzIGFzIGEgdHJpdmlhbCB3YXkgb2YgdG9rZW5pemluZyB0aGUgY29tbWFuZCBsaW5lLlxuICovXG5mdW5jdGlvbiBhcHBUb0FycmF5KGFwcDogYW55KSB7XG4gIHJldHVybiB0eXBlb2YgYXBwID09PSAnc3RyaW5nJyA/IGFwcC5zcGxpdCgnICcpIDogYXBwO1xufVxuXG50eXBlIENvbW1hbmRHZW5lcmF0b3IgPSAoZmlsZTogc3RyaW5nKSA9PiBzdHJpbmdbXTtcblxuLyoqXG4gKiBFeGVjdXRlIHRoZSBnaXZlbiBmaWxlIHdpdGggdGhlIHNhbWUgJ25vZGUnIHByb2Nlc3MgYXMgaXMgcnVubmluZyB0aGUgY3VycmVudCBwcm9jZXNzXG4gKi9cbmZ1bmN0aW9uIGV4ZWN1dGVOb2RlKHNjcmlwdEZpbGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIFtwcm9jZXNzLmV4ZWNQYXRoLCBzY3JpcHRGaWxlXTtcbn1cblxuLyoqXG4gKiBNYXBwaW5nIG9mIGV4dGVuc2lvbnMgdG8gY29tbWFuZC1saW5lIGdlbmVyYXRvcnNcbiAqL1xuY29uc3QgRVhURU5TSU9OX01BUCA9IG5ldyBNYXA8c3RyaW5nLCBDb21tYW5kR2VuZXJhdG9yPihbWycuanMnLCBleGVjdXRlTm9kZV1dKTtcblxuLyoqXG4gKiBHdWVzcyB0aGUgZXhlY3V0YWJsZSBmcm9tIHRoZSBjb21tYW5kLWxpbmUgYXJndW1lbnRcbiAqXG4gKiBPbmx5IGRvIHRoaXMgaWYgdGhlIGZpbGUgaXMgTk9UIG1hcmtlZCBhcyBleGVjdXRhYmxlLiBJZiBpdCBpcyxcbiAqIHdlJ2xsIGRlZmVyIHRvIHRoZSBzaGViYW5nIGluc2lkZSB0aGUgZmlsZSBpdHNlbGYuXG4gKlxuICogSWYgd2UncmUgb24gV2luZG93cywgd2UgQUxXQVlTIHRha2UgdGhlIGhhbmRsZXIsIHNpbmNlIGl0J3MgaGFyZCB0b1xuICogdmVyaWZ5IGlmIHJlZ2lzdHJ5IGFzc29jaWF0aW9ucyBoYXZlIG9yIGhhdmUgbm90IGJlZW4gc2V0IHVwIGZvciB0aGlzXG4gKiBmaWxlIHR5cGUsIHNvIHdlJ2xsIGFzc3VtZSB0aGUgd29yc3QgYW5kIHRha2UgY29udHJvbC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ3Vlc3NFeGVjdXRhYmxlKGNvbW1hbmRMaW5lOiBzdHJpbmdbXSkge1xuICBpZiAoY29tbWFuZExpbmUubGVuZ3RoID09PSAxKSB7XG4gICAgbGV0IGZzdGF0O1xuXG4gICAgdHJ5IHtcbiAgICAgIGZzdGF0ID0gYXdhaXQgZnMuc3RhdChjb21tYW5kTGluZVswXSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRlYnVnKGBOb3QgYSBmaWxlOiAnJHtjb21tYW5kTGluZVswXX0nLiBVc2luZyAnJHtjb21tYW5kTGluZX0nIGFzIGNvbW1hbmQtbGluZWApO1xuICAgICAgcmV0dXJuIGNvbW1hbmRMaW5lO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgY29uc3QgaXNFeGVjdXRhYmxlID0gKGZzdGF0Lm1vZGUgJiBmcy5jb25zdGFudHMuWF9PSykgIT09IDA7XG4gICAgY29uc3QgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcblxuICAgIGNvbnN0IGhhbmRsZXIgPSBFWFRFTlNJT05fTUFQLmdldChwYXRoLmV4dG5hbWUoY29tbWFuZExpbmVbMF0pKTtcbiAgICBpZiAoaGFuZGxlciAmJiAoIWlzRXhlY3V0YWJsZSB8fCBpc1dpbmRvd3MpKSB7XG4gICAgICByZXR1cm4gaGFuZGxlcihjb21tYW5kTGluZVswXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb21tYW5kTGluZTtcbn1cbiJdfQ==