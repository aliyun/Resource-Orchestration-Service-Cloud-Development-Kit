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
            // when using c# to synth
            const srcDir = curPath + '/src';
            await readDirForMd5(srcDir);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4ZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQThEO0FBQzlELGlEQUFpRDtBQUNqRCw4Q0FBOEM7QUFDOUMsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qix3Q0FBbUM7QUFDbkMsMENBQTJFO0FBQzNFLHdDQUEyQztBQUMzQyxpQ0FBaUM7QUFFakMsMkRBQTJEO0FBQ3BELEtBQUssVUFBVSxXQUFXLENBQUMsTUFBcUI7SUFDckQsTUFBTSxHQUFHLEdBQThCLEVBQUUsQ0FBQztJQUUxQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUVuQyxlQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELHlCQUFjLFVBQVUsd0JBQWEsRUFBRSxDQUFDLENBQUM7S0FDMUc7SUFFRCxNQUFNLFdBQVcsR0FBRyxNQUFNLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUUzRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0MsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztLQUNyRDtJQUNELE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV4QixlQUFLLENB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QUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxZQUFZLElBQUksU0FBUyxDQUFDLEVBQUU7WUFDM0MsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEM7S0FDRjtJQUNELE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjeHNjaGVtYSBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1hc3NlbWJseS1zY2hlbWEnO1xuaW1wb3J0ICogYXMgY3hhcGkgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY3hhcGknO1xuaW1wb3J0ICogYXMgY2hpbGRQcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnLi4vbG9nZ2luZyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uLCBQUk9KRUNUX0NPTkZJRywgVVNFUl9ERUZBVUxUUyB9IGZyb20gJy4uL3NldHRpbmdzJztcbmltcG9ydCB7IHZlcnNpb25OdW1iZXIgfSBmcm9tICcuLi92ZXJzaW9uJztcbmltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xuXG4vKiogSW52b2tlcyB0aGUgY2xvdWQgZXhlY3V0YWJsZSBhbmQgcmV0dXJucyBKU09OIG91dHB1dCAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWNQcm9ncmFtKGNvbmZpZzogQ29uZmlndXJhdGlvbik6IFByb21pc2U8Y3hhcGkuQ2xvdWRBc3NlbWJseT4ge1xuICBjb25zdCBlbnY6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBjb25zdCBjb250ZXh0ID0gY29uZmlnLmNvbnRleHQuYWxsO1xuXG4gIGRlYnVnKCdjb250ZXh0OicsIGNvbnRleHQpO1xuICBlbnZbY3hhcGkuQ09OVEVYVF9FTlZdID0gSlNPTi5zdHJpbmdpZnkoY29udGV4dCk7XG5cbiAgY29uc3QgYXBwID0gY29uZmlnLnNldHRpbmdzLmdldChbJ2FwcCddKTtcbiAgaWYgKCFhcHApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYC0tYXBwIGlzIHJlcXVpcmVkIGVpdGhlciBpbiBjb21tYW5kLWxpbmUsIGluICR7UFJPSkVDVF9DT05GSUd9IG9yIGluICR7VVNFUl9ERUZBVUxUU31gKTtcbiAgfVxuXG4gIGNvbnN0IGNvbW1hbmRMaW5lID0gYXdhaXQgZ3Vlc3NFeGVjdXRhYmxlKGFwcFRvQXJyYXkoYXBwKSk7XG5cbiAgY29uc3Qgb3V0ZGlyID0gY29uZmlnLnNldHRpbmdzLmdldChbJ291dHB1dCddKTtcbiAgaWYgKCFvdXRkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuZXhwZWN0ZWQ6IC0tb3V0cHV0IGlzIHJlcXVpcmVkJyk7XG4gIH1cbiAgYXdhaXQgZnMubWtkaXJwKG91dGRpcik7XG5cbiAgZGVidWcoJ291dGRpcjonLCBvdXRkaXIpO1xuICBlbnZbY3hhcGkuT1VURElSX0VOVl0gPSBvdXRkaXI7XG5cbiAgLy8gU2VuZCB2ZXJzaW9uIGluZm9ybWF0aW9uXG4gIGVudltjeGFwaS5DTElfQVNNX1ZFUlNJT05fRU5WXSA9IGN4c2NoZW1hLk1hbmlmZXN0LnZlcnNpb24oKTtcbiAgZW52W2N4YXBpLkNMSV9WRVJTSU9OX0VOVl0gPSB2ZXJzaW9uTnVtYmVyKCk7XG5cbiAgZGVidWcoJ2VudjonLCBlbnYpO1xuXG4gIGlmKGlmTW9kaWZ5KCkpIHtcbiAgICBhd2FpdCBleGVjKCk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlQXNzZW1ibHkob3V0ZGlyKTtcblxuICBmdW5jdGlvbiBjcmVhdGVBc3NlbWJseShhcHBEaXI6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IGN4YXBpLkNsb3VkQXNzZW1ibHkoYXBwRGlyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoY3hzY2hlbWEuVkVSU0lPTl9NSVNNQVRDSCkpIHtcbiAgICAgICAgLy8gdGhpcyBtZWFucyB0aGUgQ0xJIHZlcnNpb24gaXMgdG9vIG9sZC5cbiAgICAgICAgLy8gd2UgaW5zdHJ1Y3QgdGhlIHVzZXIgdG8gdXBncmFkZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBUaGlzIENESyBDTEkgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgQ0RLIGxpYnJhcnkgdXNlZCBieSB5b3VyIGFwcGxpY2F0aW9uLiBQbGVhc2UgdXBncmFkZSB0aGUgQ0xJIHRvIHRoZSBsYXRlc3QgdmVyc2lvbi5cXG4oJHtlcnJvci5tZXNzYWdlfSlgLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaWZNb2RpZnkoKSB7XG5cbiAgICBjb25zdCBjdXJQYXRoID0gcGF0aC5yZXNvbHZlKCcuLycpO1xuICAgIGNvbnN0IG1kNVBhdGggPSBjdXJQYXRoICsgJy8ubWQ1JztcbiAgICBsZXQgcHJlTWQ1OiBzdHJpbmc7XG4gICAgcHJlTWQ1ID0gZnMuZXhpc3RzU3luYyhtZDVQYXRoKSA/IGZzLnJlYWRGaWxlU3luYyhtZDVQYXRoKS50b1N0cmluZygpIDogJyc7XG5cbiAgICBsZXQgcGF0aEFuZE1kNTogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgaGFzaGVyID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpO1xuXG4gICAgbGV0IHBrZ0luZm9QYXRoO1xuXG4gICAgaWYoZnMuZXhpc3RzU3luYygnLi90c2NvbmZpZy5qc29uJykgfHwgZnMuZXhpc3RzU3luYygnLi9wYWNrYWdlLmpzb24nKSkge1xuICAgICAgLy8gd2hlbiB1c2luZyB0cyBvciBqcyB0byBzeW50aFxuICAgICAgcGtnSW5mb1BhdGggPSAnLi9wYWNrYWdlLmpzb24nO1xuICAgICAgY29uc3QgYmluRGlyID0gY3VyUGF0aCArICcvYmluJztcbiAgICAgIGNvbnN0IGxpYkRpciA9IGN1clBhdGggKyAnL2xpYic7XG4gICAgICBhd2FpdCByZWFkRGlyRm9yTWQ1KGJpbkRpcik7XG4gICAgICBhd2FpdCByZWFkRGlyRm9yTWQ1KGxpYkRpcik7XG4gICAgfVxuICAgIGVsc2UgaWYoZnMuZXhpc3RzU3luYygnLi9yZXF1aXJlbWVudHMudHh0JykpIHtcbiAgICAgIC8vIHdoZW4gdXNpbmcgcHl0aG9uIHRvIHN5bnRoXG4gICAgICBwa2dJbmZvUGF0aCA9ICcuL3JlcXVpcmVtZW50cy50eHQnO1xuICAgICAgYXdhaXQgcmVhZERpckZvck1kNShjdXJQYXRoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZnMuZXhpc3RzU3luYygnLi9wb20ueG1sJykpIHtcbiAgICAgIC8vIHdoZW4gdXNpbmcgamF2YSB0byBzeW50aFxuICAgICAgcGtnSW5mb1BhdGggPSAnLi9wb20ueG1sJztcbiAgICAgIGNvbnN0IHNyY0RpciA9IGN1clBhdGggKyAnL3NyYyc7XG4gICAgICBhd2FpdCByZWFkRGlyRm9yTWQ1KHNyY0Rpcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gd2hlbiB1c2luZyBjIyB0byBzeW50aFxuICAgICAgY29uc3Qgc3JjRGlyID0gY3VyUGF0aCArICcvc3JjJztcbiAgICAgIGF3YWl0IHJlYWREaXJGb3JNZDUoc3JjRGlyKTtcbiAgICB9XG5cblxuICAgIHBhdGhBbmRNZDUuc29ydCgpO1xuICAgIGZvcihsZXQgZGF0YSBvZiBwYXRoQW5kTWQ1KSB7XG4gICAgICBoYXNoZXIudXBkYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIC8vIGFkZCBwa2cgaW5mbyB0byBnZW5lcmF0ZSBtZDVcbiAgICBpZiAocGtnSW5mb1BhdGggJiYgZnMuZXhpc3RzU3luYyhwa2dJbmZvUGF0aCkpIHtcbiAgICAgIGxldCBwa2cgPSBmcy5yZWFkRmlsZVN5bmMocGtnSW5mb1BhdGgpO1xuICAgICAgaGFzaGVyLnVwZGF0ZShwa2cpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1ck1kNSA9IGhhc2hlci5kaWdlc3QoJ2hleCcpO1xuICAgIGZzLndyaXRlRmlsZVN5bmMobWQ1UGF0aCwgY3VyTWQ1KTtcblxuICAgIHJldHVybiBjdXJNZDUgIT09IHByZU1kNTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlYWREaXJGb3JNZDUocGF0aDogc3RyaW5nKSB7XG4gICAgICBsZXQgYXJyID0gZnMucmVhZGRpclN5bmMocGF0aCk7XG4gICAgICBmb3IobGV0IGkgaW4gYXJyKXtcbiAgICAgICAgbGV0IHN0YXRzID0gZnMuc3RhdFN5bmMocGF0aCArICcvJyArIGFycltpXSk7XG4gICAgICAgIGlmKHN0YXRzLmlzRmlsZSgpKXtcbiAgICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoICsgJy8nICsgYXJyW2ldO1xuICAgICAgICAgIGxldCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCk7XG4gICAgICAgICAgbGV0IGZpbGVNZDUgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKGZpbGVDb250ZW50KS5kaWdlc3QoJ2hleCcpO1xuICAgICAgICAgIHBhdGhBbmRNZDUucHVzaChmaWxlUGF0aCArICc6JyArIGZpbGVNZDUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJlYWREaXJGb3JNZDUocGF0aCArICcvJyArIGFycltpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBleGVjKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmcgfCB2b2lkPigob2ssIGZhaWwpID0+IHtcbiAgICAgIC8vIFdlIHVzZSBhIHNsaWdodGx5IGxvd2VyLWxldmVsIGludGVyZmFjZSB0bzpcbiAgICAgIC8vXG4gICAgICAvLyAtIFBhc3MgYXJndW1lbnRzIGluIGFuIGFycmF5IGluc3RlYWQgb2YgYSBzdHJpbmcsIHRvIGdldCBhcm91bmQgYVxuICAgICAgLy8gICBudW1iZXIgb2YgcXVvdGluZyBpc3N1ZXMgaW50cm9kdWNlZCBieSB0aGUgaW50ZXJtZWRpYXRlIHNoZWxsIGxheWVyXG4gICAgICAvLyAgICh3aGljaCB3b3VsZCBiZSBkaWZmZXJlbnQgYmV0d2VlbiBMaW51eCBhbmQgV2luZG93cykuXG4gICAgICAvL1xuICAgICAgLy8gLSBJbmhlcml0IHN0ZGVyciBmcm9tIGNvbnRyb2xsaW5nIHRlcm1pbmFsLiBXZSBkb24ndCB1c2UgdGhlIGNhcHR1cmVkIHZhbHVlXG4gICAgICAvLyAgIGFueXdheSwgYW5kIGlmIHRoZSBzdWJwcm9jZXNzIGlzIHByaW50aW5nIHRvIGl0IGZvciBkZWJ1Z2dpbmcgcHVycG9zZXMgdGhlXG4gICAgICAvLyAgIHVzZXIgZ2V0cyB0byBzZWUgaXQgc29vbmVyLiBQbHVzLCBjYXB0dXJpbmcgZG9lc24ndCBpbnRlcmFjdCBuaWNlbHkgd2l0aCBzb21lXG4gICAgICAvLyAgIHByb2Nlc3NlcyBsaWtlIE1hdmVuLlxuICAgICAgY29uc3QgcHJvYyA9IGNoaWxkUHJvY2Vzcy5zcGF3bihjb21tYW5kTGluZVswXSwgY29tbWFuZExpbmUuc2xpY2UoMSksIHtcbiAgICAgICAgc3RkaW86IFsnaWdub3JlJywgJ2luaGVyaXQnLCAnaW5oZXJpdCddLFxuICAgICAgICBkZXRhY2hlZDogZmFsc2UsXG4gICAgICAgIHNoZWxsOiB0cnVlLFxuICAgICAgICBlbnY6IHtcbiAgICAgICAgICAuLi5wcm9jZXNzLmVudixcbiAgICAgICAgICAuLi5lbnYsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgcHJvYy5vbignZXJyb3InLCBmYWlsKTtcblxuICAgICAgcHJvYy5vbignZXhpdCcsIChjb2RlKSA9PiB7XG4gICAgICAgIGlmIChjb2RlID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIG9rKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhaWwobmV3IEVycm9yKGBTdWJwcm9jZXNzIGV4aXRlZCB3aXRoIGVycm9yICR7Y29kZX1gKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogTWFrZSBzdXJlIHRoZSAnYXBwJyBpcyBhbiBhcnJheVxuICpcbiAqIElmIGl0J3MgYSBzdHJpbmcsIHNwbGl0IG9uIHNwYWNlcyBhcyBhIHRyaXZpYWwgd2F5IG9mIHRva2VuaXppbmcgdGhlIGNvbW1hbmQgbGluZS5cbiAqL1xuZnVuY3Rpb24gYXBwVG9BcnJheShhcHA6IGFueSkge1xuICByZXR1cm4gdHlwZW9mIGFwcCA9PT0gJ3N0cmluZycgPyBhcHAuc3BsaXQoJyAnKSA6IGFwcDtcbn1cblxudHlwZSBDb21tYW5kR2VuZXJhdG9yID0gKGZpbGU6IHN0cmluZykgPT4gc3RyaW5nW107XG5cbi8qKlxuICogRXhlY3V0ZSB0aGUgZ2l2ZW4gZmlsZSB3aXRoIHRoZSBzYW1lICdub2RlJyBwcm9jZXNzIGFzIGlzIHJ1bm5pbmcgdGhlIGN1cnJlbnQgcHJvY2Vzc1xuICovXG5mdW5jdGlvbiBleGVjdXRlTm9kZShzY3JpcHRGaWxlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBbcHJvY2Vzcy5leGVjUGF0aCwgc2NyaXB0RmlsZV07XG59XG5cbi8qKlxuICogTWFwcGluZyBvZiBleHRlbnNpb25zIHRvIGNvbW1hbmQtbGluZSBnZW5lcmF0b3JzXG4gKi9cbmNvbnN0IEVYVEVOU0lPTl9NQVAgPSBuZXcgTWFwPHN0cmluZywgQ29tbWFuZEdlbmVyYXRvcj4oW1snLmpzJywgZXhlY3V0ZU5vZGVdXSk7XG5cbi8qKlxuICogR3Vlc3MgdGhlIGV4ZWN1dGFibGUgZnJvbSB0aGUgY29tbWFuZC1saW5lIGFyZ3VtZW50XG4gKlxuICogT25seSBkbyB0aGlzIGlmIHRoZSBmaWxlIGlzIE5PVCBtYXJrZWQgYXMgZXhlY3V0YWJsZS4gSWYgaXQgaXMsXG4gKiB3ZSdsbCBkZWZlciB0byB0aGUgc2hlYmFuZyBpbnNpZGUgdGhlIGZpbGUgaXRzZWxmLlxuICpcbiAqIElmIHdlJ3JlIG9uIFdpbmRvd3MsIHdlIEFMV0FZUyB0YWtlIHRoZSBoYW5kbGVyLCBzaW5jZSBpdCdzIGhhcmQgdG9cbiAqIHZlcmlmeSBpZiByZWdpc3RyeSBhc3NvY2lhdGlvbnMgaGF2ZSBvciBoYXZlIG5vdCBiZWVuIHNldCB1cCBmb3IgdGhpc1xuICogZmlsZSB0eXBlLCBzbyB3ZSdsbCBhc3N1bWUgdGhlIHdvcnN0IGFuZCB0YWtlIGNvbnRyb2wuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGd1ZXNzRXhlY3V0YWJsZShjb21tYW5kTGluZTogc3RyaW5nW10pIHtcbiAgaWYgKGNvbW1hbmRMaW5lLmxlbmd0aCA9PT0gMSkge1xuICAgIGxldCBmc3RhdDtcblxuICAgIHRyeSB7XG4gICAgICBmc3RhdCA9IGF3YWl0IGZzLnN0YXQoY29tbWFuZExpbmVbMF0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkZWJ1ZyhgTm90IGEgZmlsZTogJyR7Y29tbWFuZExpbmVbMF19Jy4gVXNpbmcgJyR7Y29tbWFuZExpbmV9JyBhcyBjb21tYW5kLWxpbmVgKTtcbiAgICAgIHJldHVybiBjb21tYW5kTGluZTtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgIGNvbnN0IGlzRXhlY3V0YWJsZSA9IChmc3RhdC5tb2RlICYgZnMuY29uc3RhbnRzLlhfT0spICE9PSAwO1xuICAgIGNvbnN0IGlzV2luZG93cyA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMic7XG5cbiAgICBjb25zdCBoYW5kbGVyID0gRVhURU5TSU9OX01BUC5nZXQocGF0aC5leHRuYW1lKGNvbW1hbmRMaW5lWzBdKSk7XG4gICAgaWYgKGhhbmRsZXIgJiYgKCFpc0V4ZWN1dGFibGUgfHwgaXNXaW5kb3dzKSkge1xuICAgICAgcmV0dXJuIGhhbmRsZXIoY29tbWFuZExpbmVbMF0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29tbWFuZExpbmU7XG59XG4iXX0=