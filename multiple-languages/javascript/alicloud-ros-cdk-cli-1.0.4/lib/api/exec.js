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
        else {
            throw new Error('This CDK CLI init project is not allowed, please check project directory information');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4ZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQThEO0FBQzlELGlEQUFpRDtBQUNqRCw4Q0FBOEM7QUFDOUMsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qix3Q0FBbUM7QUFDbkMsMENBQTJFO0FBQzNFLHdDQUEyQztBQUMzQyxpQ0FBaUM7QUFFakMsMkRBQTJEO0FBQ3BELEtBQUssVUFBVSxXQUFXLENBQUMsTUFBcUI7SUFDckQsTUFBTSxHQUFHLEdBQThCLEVBQUUsQ0FBQztJQUUxQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUVuQyxlQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELHlCQUFjLFVBQVUsd0JBQWEsRUFBRSxDQUFDLENBQUM7S0FDMUc7SUFFRCxNQUFNLFdBQVcsR0FBRyxNQUFNLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUUzRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0MsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztLQUNyRDtJQUNELE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV4QixlQUFLLENB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LENBQUMsRUFBRTtZQUMzQyxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQztLQUNGO0lBQ0QsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4c2NoZW1hIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWFzc2VtYmx5LXNjaGVtYSc7XHJcbmltcG9ydCAqIGFzIGN4YXBpIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWN4YXBpJztcclxuaW1wb3J0ICogYXMgY2hpbGRQcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcy1leHRyYSc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnLi4vbG9nZ2luZyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24sIFBST0pFQ1RfQ09ORklHLCBVU0VSX0RFRkFVTFRTIH0gZnJvbSAnLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyB2ZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi4vdmVyc2lvbic7XHJcbmltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5cclxuLyoqIEludm9rZXMgdGhlIGNsb3VkIGV4ZWN1dGFibGUgYW5kIHJldHVybnMgSlNPTiBvdXRwdXQgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWNQcm9ncmFtKGNvbmZpZzogQ29uZmlndXJhdGlvbik6IFByb21pc2U8Y3hhcGkuQ2xvdWRBc3NlbWJseT4ge1xyXG4gIGNvbnN0IGVudjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICBjb25zdCBjb250ZXh0ID0gY29uZmlnLmNvbnRleHQuYWxsO1xyXG5cclxuICBkZWJ1ZygnY29udGV4dDonLCBjb250ZXh0KTtcclxuICBlbnZbY3hhcGkuQ09OVEVYVF9FTlZdID0gSlNPTi5zdHJpbmdpZnkoY29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGFwcCA9IGNvbmZpZy5zZXR0aW5ncy5nZXQoWydhcHAnXSk7XHJcbiAgaWYgKCFhcHApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgLS1hcHAgaXMgcmVxdWlyZWQgZWl0aGVyIGluIGNvbW1hbmQtbGluZSwgaW4gJHtQUk9KRUNUX0NPTkZJR30gb3IgaW4gJHtVU0VSX0RFRkFVTFRTfWApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tbWFuZExpbmUgPSBhd2FpdCBndWVzc0V4ZWN1dGFibGUoYXBwVG9BcnJheShhcHApKTtcclxuXHJcbiAgY29uc3Qgb3V0ZGlyID0gY29uZmlnLnNldHRpbmdzLmdldChbJ291dHB1dCddKTtcclxuICBpZiAoIW91dGRpcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1bmV4cGVjdGVkOiAtLW91dHB1dCBpcyByZXF1aXJlZCcpO1xyXG4gIH1cclxuICBhd2FpdCBmcy5ta2RpcnAob3V0ZGlyKTtcclxuXHJcbiAgZGVidWcoJ291dGRpcjonLCBvdXRkaXIpO1xyXG4gIGVudltjeGFwaS5PVVRESVJfRU5WXSA9IG91dGRpcjtcclxuXHJcbiAgLy8gU2VuZCB2ZXJzaW9uIGluZm9ybWF0aW9uXHJcbiAgZW52W2N4YXBpLkNMSV9BU01fVkVSU0lPTl9FTlZdID0gY3hzY2hlbWEuTWFuaWZlc3QudmVyc2lvbigpO1xyXG4gIGVudltjeGFwaS5DTElfVkVSU0lPTl9FTlZdID0gdmVyc2lvbk51bWJlcigpO1xyXG5cclxuICBkZWJ1ZygnZW52OicsIGVudik7XHJcblxyXG4gIGlmKGlmTW9kaWZ5KCkpIHtcclxuICAgIGF3YWl0IGV4ZWMoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjcmVhdGVBc3NlbWJseShvdXRkaXIpO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVBc3NlbWJseShhcHBEaXI6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIG5ldyBjeGFwaS5DbG91ZEFzc2VtYmx5KGFwcERpcik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhjeHNjaGVtYS5WRVJTSU9OX01JU01BVENIKSkge1xyXG4gICAgICAgIC8vIHRoaXMgbWVhbnMgdGhlIENMSSB2ZXJzaW9uIGlzIHRvbyBvbGQuXHJcbiAgICAgICAgLy8gd2UgaW5zdHJ1Y3QgdGhlIHVzZXIgdG8gdXBncmFkZS5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgVGhpcyBDREsgQ0xJIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIENESyBsaWJyYXJ5IHVzZWQgYnkgeW91ciBhcHBsaWNhdGlvbi4gUGxlYXNlIHVwZ3JhZGUgdGhlIENMSSB0byB0aGUgbGF0ZXN0IHZlcnNpb24uXFxuKCR7ZXJyb3IubWVzc2FnZX0pYCxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaWZNb2RpZnkoKSB7XHJcblxyXG4gICAgY29uc3QgY3VyUGF0aCA9IHBhdGgucmVzb2x2ZSgnLi8nKTtcclxuICAgIGNvbnN0IG1kNVBhdGggPSBjdXJQYXRoICsgJy8ubWQ1JztcclxuICAgIGxldCBwcmVNZDU6IHN0cmluZztcclxuICAgIHByZU1kNSA9IGZzLmV4aXN0c1N5bmMobWQ1UGF0aCkgPyBmcy5yZWFkRmlsZVN5bmMobWQ1UGF0aCkudG9TdHJpbmcoKSA6ICcnO1xyXG5cclxuICAgIGxldCBwYXRoQW5kTWQ1OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgbGV0IGhhc2hlciA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKTtcclxuXHJcbiAgICBsZXQgcGtnSW5mb1BhdGg7XHJcblxyXG4gICAgaWYoZnMuZXhpc3RzU3luYygnLi90c2NvbmZpZy5qc29uJykgfHwgZnMuZXhpc3RzU3luYygnLi9wYWNrYWdlLmpzb24nKSkge1xyXG4gICAgICAvLyB3aGVuIHVzaW5nIHRzIG9yIGpzIHRvIHN5bnRoXHJcbiAgICAgIHBrZ0luZm9QYXRoID0gJy4vcGFja2FnZS5qc29uJztcclxuICAgICAgY29uc3QgYmluRGlyID0gY3VyUGF0aCArICcvYmluJztcclxuICAgICAgY29uc3QgbGliRGlyID0gY3VyUGF0aCArICcvbGliJztcclxuICAgICAgYXdhaXQgcmVhZERpckZvck1kNShiaW5EaXIpO1xyXG4gICAgICBhd2FpdCByZWFkRGlyRm9yTWQ1KGxpYkRpcik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGZzLmV4aXN0c1N5bmMoJy4vcmVxdWlyZW1lbnRzLnR4dCcpKSB7XHJcbiAgICAgIC8vIHdoZW4gdXNpbmcgcHl0aG9uIHRvIHN5bnRoXHJcbiAgICAgIHBrZ0luZm9QYXRoID0gJy4vcmVxdWlyZW1lbnRzLnR4dCc7XHJcbiAgICAgIGF3YWl0IHJlYWREaXJGb3JNZDUoY3VyUGF0aCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmcy5leGlzdHNTeW5jKCcuL3BvbS54bWwnKSkge1xyXG4gICAgICAvLyB3aGVuIHVzaW5nIGphdmEgdG8gc3ludGhcclxuICAgICAgcGtnSW5mb1BhdGggPSAnLi9wb20ueG1sJztcclxuICAgICAgY29uc3Qgc3JjRGlyID0gY3VyUGF0aCArICcvc3JjJztcclxuICAgICAgYXdhaXQgcmVhZERpckZvck1kNShzcmNEaXIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBDREsgQ0xJIGluaXQgcHJvamVjdCBpcyBub3QgYWxsb3dlZCwgcGxlYXNlIGNoZWNrIHByb2plY3QgZGlyZWN0b3J5IGluZm9ybWF0aW9uJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBhdGhBbmRNZDUuc29ydCgpO1xyXG4gICAgZm9yKGxldCBkYXRhIG9mIHBhdGhBbmRNZDUpIHtcclxuICAgICAgaGFzaGVyLnVwZGF0ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgcGtnIGluZm8gdG8gZ2VuZXJhdGUgbWQ1XHJcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwa2dJbmZvUGF0aCkpIHtcclxuICAgICAgbGV0IHBrZyA9IGZzLnJlYWRGaWxlU3luYyhwa2dJbmZvUGF0aCk7XHJcbiAgICAgIGhhc2hlci51cGRhdGUocGtnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJNZDUgPSBoYXNoZXIuZGlnZXN0KCdoZXgnKTtcclxuICAgIGZzLndyaXRlRmlsZVN5bmMobWQ1UGF0aCwgY3VyTWQ1KTtcclxuXHJcbiAgICByZXR1cm4gY3VyTWQ1ICE9PSBwcmVNZDU7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVhZERpckZvck1kNShwYXRoOiBzdHJpbmcpIHtcclxuICAgICAgbGV0IGFyciA9IGZzLnJlYWRkaXJTeW5jKHBhdGgpO1xyXG4gICAgICBmb3IobGV0IGkgaW4gYXJyKXtcclxuICAgICAgICBsZXQgc3RhdHMgPSBmcy5zdGF0U3luYyhwYXRoICsgJy8nICsgYXJyW2ldKTtcclxuICAgICAgICBpZihzdGF0cy5pc0ZpbGUoKSl7XHJcbiAgICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoICsgJy8nICsgYXJyW2ldO1xyXG4gICAgICAgICAgbGV0IGZpbGVDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcclxuICAgICAgICAgIGxldCBmaWxlTWQ1ID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpLnVwZGF0ZShmaWxlQ29udGVudCkuZGlnZXN0KCdoZXgnKTtcclxuICAgICAgICAgIHBhdGhBbmRNZDUucHVzaChmaWxlUGF0aCArICc6JyArIGZpbGVNZDUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZWFkRGlyRm9yTWQ1KHBhdGggKyAnLycgKyBhcnJbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZXhlYygpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChvaywgZmFpbCkgPT4ge1xyXG4gICAgICAvLyBXZSB1c2UgYSBzbGlnaHRseSBsb3dlci1sZXZlbCBpbnRlcmZhY2UgdG86XHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIC0gUGFzcyBhcmd1bWVudHMgaW4gYW4gYXJyYXkgaW5zdGVhZCBvZiBhIHN0cmluZywgdG8gZ2V0IGFyb3VuZCBhXHJcbiAgICAgIC8vICAgbnVtYmVyIG9mIHF1b3RpbmcgaXNzdWVzIGludHJvZHVjZWQgYnkgdGhlIGludGVybWVkaWF0ZSBzaGVsbCBsYXllclxyXG4gICAgICAvLyAgICh3aGljaCB3b3VsZCBiZSBkaWZmZXJlbnQgYmV0d2VlbiBMaW51eCBhbmQgV2luZG93cykuXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIC0gSW5oZXJpdCBzdGRlcnIgZnJvbSBjb250cm9sbGluZyB0ZXJtaW5hbC4gV2UgZG9uJ3QgdXNlIHRoZSBjYXB0dXJlZCB2YWx1ZVxyXG4gICAgICAvLyAgIGFueXdheSwgYW5kIGlmIHRoZSBzdWJwcm9jZXNzIGlzIHByaW50aW5nIHRvIGl0IGZvciBkZWJ1Z2dpbmcgcHVycG9zZXMgdGhlXHJcbiAgICAgIC8vICAgdXNlciBnZXRzIHRvIHNlZSBpdCBzb29uZXIuIFBsdXMsIGNhcHR1cmluZyBkb2Vzbid0IGludGVyYWN0IG5pY2VseSB3aXRoIHNvbWVcclxuICAgICAgLy8gICBwcm9jZXNzZXMgbGlrZSBNYXZlbi5cclxuICAgICAgY29uc3QgcHJvYyA9IGNoaWxkUHJvY2Vzcy5zcGF3bihjb21tYW5kTGluZVswXSwgY29tbWFuZExpbmUuc2xpY2UoMSksIHtcclxuICAgICAgICBzdGRpbzogWydpZ25vcmUnLCAnaW5oZXJpdCcsICdpbmhlcml0J10sXHJcbiAgICAgICAgZGV0YWNoZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNoZWxsOiB0cnVlLFxyXG4gICAgICAgIGVudjoge1xyXG4gICAgICAgICAgLi4ucHJvY2Vzcy5lbnYsXHJcbiAgICAgICAgICAuLi5lbnYsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwcm9jLm9uKCdlcnJvcicsIGZhaWwpO1xyXG5cclxuICAgICAgcHJvYy5vbignZXhpdCcsIChjb2RlKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiBvaygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFpbChuZXcgRXJyb3IoYFN1YnByb2Nlc3MgZXhpdGVkIHdpdGggZXJyb3IgJHtjb2RlfWApKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWFrZSBzdXJlIHRoZSAnYXBwJyBpcyBhbiBhcnJheVxyXG4gKlxyXG4gKiBJZiBpdCdzIGEgc3RyaW5nLCBzcGxpdCBvbiBzcGFjZXMgYXMgYSB0cml2aWFsIHdheSBvZiB0b2tlbml6aW5nIHRoZSBjb21tYW5kIGxpbmUuXHJcbiAqL1xyXG5mdW5jdGlvbiBhcHBUb0FycmF5KGFwcDogYW55KSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBhcHAgPT09ICdzdHJpbmcnID8gYXBwLnNwbGl0KCcgJykgOiBhcHA7XHJcbn1cclxuXHJcbnR5cGUgQ29tbWFuZEdlbmVyYXRvciA9IChmaWxlOiBzdHJpbmcpID0+IHN0cmluZ1tdO1xyXG5cclxuLyoqXHJcbiAqIEV4ZWN1dGUgdGhlIGdpdmVuIGZpbGUgd2l0aCB0aGUgc2FtZSAnbm9kZScgcHJvY2VzcyBhcyBpcyBydW5uaW5nIHRoZSBjdXJyZW50IHByb2Nlc3NcclxuICovXHJcbmZ1bmN0aW9uIGV4ZWN1dGVOb2RlKHNjcmlwdEZpbGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICByZXR1cm4gW3Byb2Nlc3MuZXhlY1BhdGgsIHNjcmlwdEZpbGVdO1xyXG59XHJcblxyXG4vKipcclxuICogTWFwcGluZyBvZiBleHRlbnNpb25zIHRvIGNvbW1hbmQtbGluZSBnZW5lcmF0b3JzXHJcbiAqL1xyXG5jb25zdCBFWFRFTlNJT05fTUFQID0gbmV3IE1hcDxzdHJpbmcsIENvbW1hbmRHZW5lcmF0b3I+KFtbJy5qcycsIGV4ZWN1dGVOb2RlXV0pO1xyXG5cclxuLyoqXHJcbiAqIEd1ZXNzIHRoZSBleGVjdXRhYmxlIGZyb20gdGhlIGNvbW1hbmQtbGluZSBhcmd1bWVudFxyXG4gKlxyXG4gKiBPbmx5IGRvIHRoaXMgaWYgdGhlIGZpbGUgaXMgTk9UIG1hcmtlZCBhcyBleGVjdXRhYmxlLiBJZiBpdCBpcyxcclxuICogd2UnbGwgZGVmZXIgdG8gdGhlIHNoZWJhbmcgaW5zaWRlIHRoZSBmaWxlIGl0c2VsZi5cclxuICpcclxuICogSWYgd2UncmUgb24gV2luZG93cywgd2UgQUxXQVlTIHRha2UgdGhlIGhhbmRsZXIsIHNpbmNlIGl0J3MgaGFyZCB0b1xyXG4gKiB2ZXJpZnkgaWYgcmVnaXN0cnkgYXNzb2NpYXRpb25zIGhhdmUgb3IgaGF2ZSBub3QgYmVlbiBzZXQgdXAgZm9yIHRoaXNcclxuICogZmlsZSB0eXBlLCBzbyB3ZSdsbCBhc3N1bWUgdGhlIHdvcnN0IGFuZCB0YWtlIGNvbnRyb2wuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBndWVzc0V4ZWN1dGFibGUoY29tbWFuZExpbmU6IHN0cmluZ1tdKSB7XHJcbiAgaWYgKGNvbW1hbmRMaW5lLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgbGV0IGZzdGF0O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGZzdGF0ID0gYXdhaXQgZnMuc3RhdChjb21tYW5kTGluZVswXSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkZWJ1ZyhgTm90IGEgZmlsZTogJyR7Y29tbWFuZExpbmVbMF19Jy4gVXNpbmcgJyR7Y29tbWFuZExpbmV9JyBhcyBjb21tYW5kLWxpbmVgKTtcclxuICAgICAgcmV0dXJuIGNvbW1hbmRMaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXHJcbiAgICBjb25zdCBpc0V4ZWN1dGFibGUgPSAoZnN0YXQubW9kZSAmIGZzLmNvbnN0YW50cy5YX09LKSAhPT0gMDtcclxuICAgIGNvbnN0IGlzV2luZG93cyA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMic7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlciA9IEVYVEVOU0lPTl9NQVAuZ2V0KHBhdGguZXh0bmFtZShjb21tYW5kTGluZVswXSkpO1xyXG4gICAgaWYgKGhhbmRsZXIgJiYgKCFpc0V4ZWN1dGFibGUgfHwgaXNXaW5kb3dzKSkge1xyXG4gICAgICByZXR1cm4gaGFuZGxlcihjb21tYW5kTGluZVswXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjb21tYW5kTGluZTtcclxufVxyXG4iXX0=