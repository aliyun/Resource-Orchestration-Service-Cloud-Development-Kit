"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printAvailableTemplates = exports.availableInitLanguages = exports.availableInitTemplates = exports.InitTemplate = exports.cliInit = void 0;
const cxapi = require("@alicloud/ros-cdk-cxapi");
const childProcess = require("child_process");
const colors = require("colors/safe");
const fs = require("fs-extra");
const path = require("path");
const logging_1 = require("./logging");
const directories_1 = require("./util/directories");
const cdk_toolkit_1 = require("./cdk-toolkit");
// tslint:disable:no-var-requires those libraries don't have up-to-date @types modules
// eslint-disable-next-line @typescript-eslint/no-require-imports
const camelCase = require('camelcase');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const decamelize = require('decamelize');
// tslint:enable:no-var-requires
const TEMPLATES_DIR = path.join(__dirname, 'init-templates');
/**
 * Initialize a CDK package in the current directory
 */
async function cliInit(appName, language, canUseNetwork = true, generateOnly = false, workDir = process.cwd()) {
    if (!appName && !language) {
        await printAvailableTemplates();
        return;
    }
    appName = appName || 'default'; // "default" is the default appName (and maps to "app")
    const template = (await exports.availableInitTemplates).find((t) => t.hasName(appName));
    if (!template) {
        await printAvailableTemplates(language);
        throw new Error(`Unknown init template: ${appName}`);
    }
    if (!language && template.languages.length === 1) {
        language = template.languages[0];
        logging_1.warning(`No --language was provided, but '${appName}' supports only '${language}', so defaulting to --language=${language}`);
    }
    if (!language) {
        logging_1.print(`Available languages for ${colors.green(appName)}: ${template.languages.map((l) => colors.blue(l)).join(', ')}`);
        throw new Error('No language was selected');
    }
    await initializeProject(template, language, canUseNetwork, generateOnly, workDir);
    cdk_toolkit_1.writeAndUpdateLanguageInfo(language);
}
exports.cliInit = cliInit;
/**
 * Returns the name of the Python executable for this OS
 */
function pythonExecutable() {
    let python = 'python3';
    if (process.platform === 'win32') {
        python = 'python';
    }
    return python;
}
const INFO_DOT_JSON = 'info.json';
class InitTemplate {
    constructor(basePath, name, languages, info) {
        this.basePath = basePath;
        this.name = name;
        this.languages = languages;
        this.aliases = new Set();
        this.description = info.description;
        for (const alias of info.aliases || []) {
            this.aliases.add(alias);
        }
    }
    static async fromName(name) {
        const basePath = path.join(TEMPLATES_DIR, name);
        const languages = (await listDirectory(basePath)).filter((f) => f !== INFO_DOT_JSON);
        const info = await fs.readJson(path.join(basePath, INFO_DOT_JSON));
        return new InitTemplate(basePath, name, languages, info);
    }
    /**
     * @param name the name that is being checked
     * @returns ``true`` if ``name`` is the name of this template or an alias of it.
     */
    hasName(name) {
        return name === this.name || this.aliases.has(name);
    }
    /**
     * Creates a new instance of this ``InitTemplate`` for a given language to a specified folder.
     *
     * @param language    the language to instantiate this template with
     * @param targetDirectory the directory where the template is to be instantiated into
     */
    async install(language, targetDirectory) {
        if (this.languages.indexOf(language) === -1) {
            logging_1.error(`The ${colors.blue(language)} language is not supported for ${colors.green(this.name)} ` +
                `(it supports: ${this.languages.map((l) => colors.blue(l)).join(', ')})`);
            throw new Error(`Unsupported language: ${language}`);
        }
        const sourceDirectory = path.join(this.basePath, language);
        const hookTempDirectory = path.join(targetDirectory, 'tmp');
        await fs.mkdir(hookTempDirectory);
        await this.installFiles(sourceDirectory, targetDirectory, {
            name: decamelize(path.basename(path.resolve(targetDirectory))),
        });
        await this.applyFutureFlags(targetDirectory);
        await this.invokeHooks(hookTempDirectory, targetDirectory);
        await fs.remove(hookTempDirectory);
    }
    async installFiles(sourceDirectory, targetDirectory, project) {
        for (const file of await fs.readdir(sourceDirectory)) {
            const fromFile = path.join(sourceDirectory, file);
            const toFile = path.join(targetDirectory, this.expand(unescape(file), project));
            if ((await fs.stat(fromFile)).isDirectory()) {
                await fs.mkdir(toFile);
                await this.installFiles(fromFile, toFile, project);
                continue;
            }
            else if (file.match(/^.*\.template\.[^.]+$/)) {
                await this.installProcessed(fromFile, toFile.replace(/\.template(\.[^.]+)$/, '$1'), project);
                continue;
            }
            else if (file.match(/^.*\.hook\.(d.)?[^.]+$/)) {
                await this.installProcessed(fromFile, path.join(targetDirectory, 'tmp', file), project);
                continue;
            }
            else if (file.endsWith('.template')) {
                await this.installProcessed(fromFile, toFile.substring(0, toFile.length - 9), project);
                continue;
            }
            else {
                await fs.copy(fromFile, toFile);
            }
        }
    }
    /**
     * @summary   Invoke any javascript hooks that exist in the template.
     * @description Sometimes templates need more complex logic than just replacing tokens. A 'hook' is
     *        any file that ends in .hook.js. It should export a single function called "invoke"
     *        that accepts a single string parameter. When the template is installed, each hook
     *        will be invoked, passing the target directory as the only argument. Hooks are invoked
     *        in lexical order.
     */
    async invokeHooks(sourceDirectory, targetDirectory) {
        const files = await fs.readdir(sourceDirectory);
        files.sort(); // Sorting allows template authors to control the order in which hooks are invoked.
        for (const file of files) {
            if (file.match(/^.*\.hook\.js$/)) {
                // eslint-disable-next-line @typescript-eslint/no-require-imports
                const invoke = require(path.join(sourceDirectory, file)).invoke;
                await invoke(targetDirectory);
                const invokeUnitTest = require(path.join(sourceDirectory, file)).invokeUnitTest;
                await invokeUnitTest(targetDirectory);
            }
        }
    }
    async installProcessed(templatePath, toFile, project) {
        const template = await fs.readFile(templatePath, { encoding: 'utf-8' });
        await fs.writeFile(toFile, this.expand(template, project));
    }
    expand(template, project) {
        const MATCH_VER_BUILD = /\+[a-f0-9]+$/; // Matches "+BUILD" in "x.y.z-beta+BUILD"
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const cdkInfo = require('../cdk-info.json');
        const cdkVersion = cdkInfo.cdk_sdk_version.replace(MATCH_VER_BUILD, '');
        const cdkServiceVersion = cdkInfo.cdk_service_sdk_version.replace(MATCH_VER_BUILD, '');
        return template
            .replace(/%name%/g, project.name)
            .replace(/%name\.camelCased%/g, camelCase(project.name))
            .replace(/%name\.PascalCased%/g, camelCase(project.name, { pascalCase: true }))
            .replace(/%cdk-version%/g, cdkVersion)
            .replace(/%cdk-service-version%/g, cdkServiceVersion)
            .replace(/%cdk-home%/g, directories_1.cdkHomeDir())
            .replace(/%name\.PythonModule%/g, project.name.replace(/-/g, '_'))
            .replace(/%python-executable%/g, pythonExecutable())
            .replace(/%name\.StackName%/g, project.name.replace(/[^A-Za-z0-9-]/g, '-'));
    }
    /**
     * Adds context variables to `cdk.json` in the generated project directory to
     * enable future behavior for new projects.
     */
    async applyFutureFlags(projectDir) {
        const cdkJson = path.join(projectDir, 'cdk.json');
        if (!(await fs.pathExists(cdkJson))) {
            return;
        }
        const config = await fs.readJson(cdkJson);
        config.context = {
            ...config.context,
            ...cxapi.FUTURE_FLAGS,
        };
        await fs.writeJson(cdkJson, config, { spaces: 2 });
    }
}
exports.InitTemplate = InitTemplate;
exports.availableInitTemplates = new Promise(async (resolve) => {
    const templateNames = await listDirectory(TEMPLATES_DIR);
    const templates = new Array();
    for (const templateName of templateNames) {
        templates.push(await InitTemplate.fromName(templateName));
    }
    resolve(templates);
});
exports.availableInitLanguages = new Promise(async (resolve) => {
    const templates = await exports.availableInitTemplates;
    const result = new Set();
    for (const template of templates) {
        for (const language of template.languages) {
            result.add(language);
        }
    }
    resolve([...result]);
});
/**
 * @param dirPath is the directory to be listed.
 * @returns the list of file or directory names contained in ``dirPath``, excluding any dot-file, and sorted.
 */
async function listDirectory(dirPath) {
    return (await fs.readdir(dirPath)).filter((p) => !p.startsWith('.')).sort();
}
async function printAvailableTemplates(language) {
    logging_1.print('Available templates:');
    for (const template of await exports.availableInitTemplates) {
        if (language && template.languages.indexOf(language) === -1) {
            continue;
        }
        logging_1.print(`* ${colors.green(template.name)}: ${template.description}`);
        const languageArg = language
            ? colors.bold(language)
            : template.languages.length > 1
                ? `[${template.languages.map((t) => colors.bold(t)).join('|')}]`
                : colors.bold(template.languages[0]);
        logging_1.print(`   └─ ${colors.blue(`cdk init ${colors.bold(template.name)} --language=${languageArg}`)}`);
    }
}
exports.printAvailableTemplates = printAvailableTemplates;
async function initializeProject(template, language, canUseNetwork, generateOnly, workDir) {
    await assertIsEmptyDirectory(workDir);
    logging_1.print(`Applying project template ${colors.green(template.name)} for ${colors.blue(language)}`);
    await template.install(language, workDir);
    if (await fs.pathExists('README.md')) {
        logging_1.print(colors.green(await fs.readFile('README.md', { encoding: 'utf-8' })));
    }
    if (!generateOnly) {
        await initializeGitRepository(workDir);
        await postInstall(language, canUseNetwork, workDir);
    }
    logging_1.print('✅ All done!');
}
async function assertIsEmptyDirectory(workDir) {
    const files = await fs.readdir(workDir);
    if (files.filter((f) => !f.startsWith('.')).length !== 0) {
        throw new Error('`ros init` cannot be run in a non-empty directory!');
    }
}
async function initializeGitRepository(workDir) {
    if (await isInGitRepository(workDir)) {
        return;
    }
    logging_1.print('Initializing a new git repository...');
    try {
        await execute('git', ['init'], { cwd: workDir });
        await execute('git', ['add', '.'], { cwd: workDir });
        await execute('git', ['commit', '--message="Initial commit"', '--no-gpg-sign'], { cwd: workDir });
    }
    catch (e) {
        logging_1.warning('Unable to initialize git repository for your project.');
    }
}
async function postInstall(language, canUseNetwork, workDir) {
    switch (language) {
        case 'javascript':
            return await postInstallJavascript(canUseNetwork, workDir);
        case 'typescript':
            return await postInstallTypescript(canUseNetwork, workDir);
        case 'java':
            return await postInstallJava(canUseNetwork, workDir);
        case 'python':
            return await postInstallPython(workDir);
    }
}
async function postInstallJavascript(canUseNetwork, cwd) {
    return postInstallTypescript(canUseNetwork, cwd);
}
async function postInstallTypescript(canUseNetwork, cwd) {
    const command = 'npm';
    if (!canUseNetwork) {
        logging_1.warning(`Please run '${command} install'!`);
        return;
    }
    logging_1.print(`Executing ${colors.green(`${command} install`)}...`);
    try {
        await execute(command, ['install'], { cwd });
    }
    catch (e) {
        logging_1.warning(`${command} install failed: ` + e.message);
    }
}
async function postInstallJava(canUseNetwork, cwd) {
    const mvnPackageWarning = "Please run 'mvn package'!";
    if (!canUseNetwork) {
        logging_1.warning(mvnPackageWarning);
        return;
    }
    logging_1.print("Executing 'mvn package'");
    try {
        await execute('mvn', ['package'], { cwd });
    }
    catch (e) {
        logging_1.warning('Unable to package compiled code as JAR');
        logging_1.warning(mvnPackageWarning);
    }
}
async function postInstallPython(cwd) {
    const python = pythonExecutable();
    logging_1.warning(`Please run ${python} -m venv .env'!`);
    logging_1.print(`Executing ${colors.green('Creating virtualenv...')}`);
    try {
        await execute(python, ['-m venv', '.env'], { cwd });
    }
    catch (e) {
        logging_1.warning('Unable to create virtualenv automatically');
        logging_1.warning(`Please run '${python} -m venv .env'!`);
    }
}
/**
 * @param dir a directory to be checked
 * @returns true if ``dir`` is within a git repository.
 */
async function isInGitRepository(dir) {
    while (true) {
        if (await fs.pathExists(path.join(dir, '.git'))) {
            return true;
        }
        if (isRoot(dir)) {
            return false;
        }
        dir = path.dirname(dir);
    }
}
/**
 * @param dir a directory to be checked.
 * @returns true if ``dir`` is the root of a filesystem.
 */
function isRoot(dir) {
    return path.dirname(dir) === dir;
}
/**
 * Executes `command`. STDERR is emitted in real-time.
 *
 * If command exits with non-zero exit code, an exceprion is thrown and includes
 * the contents of STDOUT.
 *
 * @returns STDOUT (if successful).
 */
async function execute(cmd, args, { cwd }) {
    const child = childProcess.spawn(cmd, args, { cwd, shell: true, stdio: ['ignore', 'pipe', 'inherit'] });
    let stdout = '';
    child.stdout.on('data', (chunk) => (stdout += chunk.toString()));
    return new Promise((ok, fail) => {
        child.once('error', (err) => fail(err));
        child.once('exit', (status) => {
            if (status === 0) {
                return ok(stdout);
            }
            else {
                process.stderr.write(stdout);
                return fail(new Error(`${cmd} exited with status ${status}`));
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQWlEO0FBQ2pELDhDQUE4QztBQUM5QyxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qix1Q0FBa0Q7QUFDbEQsb0RBQWdEO0FBQ2hELCtDQUEwRDtBQUkxRCxzRkFBc0Y7QUFDdEYsaUVBQWlFO0FBQ2pFLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN2QyxpRUFBaUU7QUFDakUsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pDLGdDQUFnQztBQUVoQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRTdEOztHQUVHO0FBQ0ksS0FBSyxVQUFVLE9BQU8sQ0FDM0IsT0FBZ0IsRUFDaEIsUUFBaUIsRUFDakIsYUFBYSxHQUFHLElBQUksRUFDcEIsWUFBWSxHQUFHLEtBQUssRUFDcEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUU7SUFFdkIsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUN6QixNQUFNLHVCQUF1QixFQUFFLENBQUM7UUFDaEMsT0FBTztLQUNSO0lBRUQsT0FBTyxHQUFHLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyx1REFBdUQ7SUFFdkYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLDhCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQVEsQ0FBQyxDQUFDLENBQUM7SUFDakYsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNiLE1BQU0sdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsT0FBTyxF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SSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyx1QkFBdUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQy9EO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjeGFwaSBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jeGFwaSc7XG5pbXBvcnQgKiBhcyBjaGlsZFByb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGVycm9yLCBwcmludCwgd2FybmluZyB9IGZyb20gJy4vbG9nZ2luZyc7XG5pbXBvcnQgeyBjZGtIb21lRGlyIH0gZnJvbSAnLi91dGlsL2RpcmVjdG9yaWVzJztcbmltcG9ydCB7IHdyaXRlQW5kVXBkYXRlTGFuZ3VhZ2VJbmZvIH0gZnJvbSAnLi9jZGstdG9vbGtpdCdcblxuZXhwb3J0IHR5cGUgSW52b2tlSG9vayA9ICh0YXJnZXREaXJlY3Rvcnk6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tdmFyLXJlcXVpcmVzIHRob3NlIGxpYnJhcmllcyBkb24ndCBoYXZlIHVwLXRvLWRhdGUgQHR5cGVzIG1vZHVsZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG5jb25zdCBjYW1lbENhc2UgPSByZXF1aXJlKCdjYW1lbGNhc2UnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG5jb25zdCBkZWNhbWVsaXplID0gcmVxdWlyZSgnZGVjYW1lbGl6ZScpO1xuLy8gdHNsaW50OmVuYWJsZTpuby12YXItcmVxdWlyZXNcblxuY29uc3QgVEVNUExBVEVTX0RJUiA9IHBhdGguam9pbihfX2Rpcm5hbWUsICdpbml0LXRlbXBsYXRlcycpO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBDREsgcGFja2FnZSBpbiB0aGUgY3VycmVudCBkaXJlY3RvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsaUluaXQoXG4gIGFwcE5hbWU/OiBzdHJpbmcsXG4gIGxhbmd1YWdlPzogc3RyaW5nLFxuICBjYW5Vc2VOZXR3b3JrID0gdHJ1ZSxcbiAgZ2VuZXJhdGVPbmx5ID0gZmFsc2UsXG4gIHdvcmtEaXIgPSBwcm9jZXNzLmN3ZCgpLFxuKSB7XG4gIGlmICghYXBwTmFtZSAmJiAhbGFuZ3VhZ2UpIHtcbiAgICBhd2FpdCBwcmludEF2YWlsYWJsZVRlbXBsYXRlcygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGFwcE5hbWUgPSBhcHBOYW1lIHx8ICdkZWZhdWx0JzsgLy8gXCJkZWZhdWx0XCIgaXMgdGhlIGRlZmF1bHQgYXBwTmFtZSAoYW5kIG1hcHMgdG8gXCJhcHBcIilcblxuICBjb25zdCB0ZW1wbGF0ZSA9IChhd2FpdCBhdmFpbGFibGVJbml0VGVtcGxhdGVzKS5maW5kKCh0KSA9PiB0Lmhhc05hbWUoYXBwTmFtZSEpKTtcbiAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgIGF3YWl0IHByaW50QXZhaWxhYmxlVGVtcGxhdGVzKGxhbmd1YWdlKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gaW5pdCB0ZW1wbGF0ZTogJHthcHBOYW1lfWApO1xuICB9XG4gIGlmICghbGFuZ3VhZ2UgJiYgdGVtcGxhdGUubGFuZ3VhZ2VzLmxlbmd0aCA9PT0gMSkge1xuICAgIGxhbmd1YWdlID0gdGVtcGxhdGUubGFuZ3VhZ2VzWzBdO1xuICAgIHdhcm5pbmcoXG4gICAgICBgTm8gLS1sYW5ndWFnZSB3YXMgcHJvdmlkZWQsIGJ1dCAnJHthcHBOYW1lfScgc3VwcG9ydHMgb25seSAnJHtsYW5ndWFnZX0nLCBzbyBkZWZhdWx0aW5nIHRvIC0tbGFuZ3VhZ2U9JHtsYW5ndWFnZX1gLFxuICAgICk7XG4gIH1cbiAgaWYgKCFsYW5ndWFnZSkge1xuICAgIHByaW50KFxuICAgICAgYEF2YWlsYWJsZSBsYW5ndWFnZXMgZm9yICR7Y29sb3JzLmdyZWVuKGFwcE5hbWUpfTogJHt0ZW1wbGF0ZS5sYW5ndWFnZXMubWFwKChsKSA9PiBjb2xvcnMuYmx1ZShsKSkuam9pbignLCAnKX1gLFxuICAgICk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBsYW5ndWFnZSB3YXMgc2VsZWN0ZWQnKTtcbiAgfVxuXG4gIGF3YWl0IGluaXRpYWxpemVQcm9qZWN0KHRlbXBsYXRlLCBsYW5ndWFnZSwgY2FuVXNlTmV0d29yaywgZ2VuZXJhdGVPbmx5LCB3b3JrRGlyKTtcbiAgd3JpdGVBbmRVcGRhdGVMYW5ndWFnZUluZm8obGFuZ3VhZ2UpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIFB5dGhvbiBleGVjdXRhYmxlIGZvciB0aGlzIE9TXG4gKi9cbmZ1bmN0aW9uIHB5dGhvbkV4ZWN1dGFibGUoKSB7XG4gIGxldCBweXRob24gPSAncHl0aG9uMyc7XG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgcHl0aG9uID0gJ3B5dGhvbic7XG4gIH1cbiAgcmV0dXJuIHB5dGhvbjtcbn1cbmNvbnN0IElORk9fRE9UX0pTT04gPSAnaW5mby5qc29uJztcblxuZXhwb3J0IGNsYXNzIEluaXRUZW1wbGF0ZSB7XG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZnJvbU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgYmFzZVBhdGggPSBwYXRoLmpvaW4oVEVNUExBVEVTX0RJUiwgbmFtZSk7XG4gICAgY29uc3QgbGFuZ3VhZ2VzID0gKGF3YWl0IGxpc3REaXJlY3RvcnkoYmFzZVBhdGgpKS5maWx0ZXIoKGYpID0+IGYgIT09IElORk9fRE9UX0pTT04pO1xuICAgIGNvbnN0IGluZm8gPSBhd2FpdCBmcy5yZWFkSnNvbihwYXRoLmpvaW4oYmFzZVBhdGgsIElORk9fRE9UX0pTT04pKTtcbiAgICByZXR1cm4gbmV3IEluaXRUZW1wbGF0ZShiYXNlUGF0aCwgbmFtZSwgbGFuZ3VhZ2VzLCBpbmZvKTtcbiAgfVxuXG4gIHB1YmxpYyByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgcmVhZG9ubHkgYWxpYXNlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFzZVBhdGg6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBsYW5ndWFnZXM6IHN0cmluZ1tdLFxuICAgIGluZm86IGFueSxcbiAgKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGluZm8uZGVzY3JpcHRpb247XG4gICAgZm9yIChjb25zdCBhbGlhcyBvZiBpbmZvLmFsaWFzZXMgfHwgW10pIHtcbiAgICAgIHRoaXMuYWxpYXNlcy5hZGQoYWxpYXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSB0aGF0IGlzIGJlaW5nIGNoZWNrZWRcbiAgICogQHJldHVybnMgYGB0cnVlYGAgaWYgYGBuYW1lYGAgaXMgdGhlIG5hbWUgb2YgdGhpcyB0ZW1wbGF0ZSBvciBhbiBhbGlhcyBvZiBpdC5cbiAgICovXG4gIHB1YmxpYyBoYXNOYW1lKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBuYW1lID09PSB0aGlzLm5hbWUgfHwgdGhpcy5hbGlhc2VzLmhhcyhuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgYGBJbml0VGVtcGxhdGVgYCBmb3IgYSBnaXZlbiBsYW5ndWFnZSB0byBhIHNwZWNpZmllZCBmb2xkZXIuXG4gICAqXG4gICAqIEBwYXJhbSBsYW5ndWFnZSAgICB0aGUgbGFuZ3VhZ2UgdG8gaW5zdGFudGlhdGUgdGhpcyB0ZW1wbGF0ZSB3aXRoXG4gICAqIEBwYXJhbSB0YXJnZXREaXJlY3RvcnkgdGhlIGRpcmVjdG9yeSB3aGVyZSB0aGUgdGVtcGxhdGUgaXMgdG8gYmUgaW5zdGFudGlhdGVkIGludG9cbiAgICovXG4gIHB1YmxpYyBhc3luYyBpbnN0YWxsKGxhbmd1YWdlOiBzdHJpbmcsIHRhcmdldERpcmVjdG9yeTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMubGFuZ3VhZ2VzLmluZGV4T2YobGFuZ3VhZ2UpID09PSAtMSkge1xuICAgICAgZXJyb3IoXG4gICAgICAgIGBUaGUgJHtjb2xvcnMuYmx1ZShsYW5ndWFnZSl9IGxhbmd1YWdlIGlzIG5vdCBzdXBwb3J0ZWQgZm9yICR7Y29sb3JzLmdyZWVuKHRoaXMubmFtZSl9IGAgK1xuICAgICAgICAgIGAoaXQgc3VwcG9ydHM6ICR7dGhpcy5sYW5ndWFnZXMubWFwKChsKSA9PiBjb2xvcnMuYmx1ZShsKSkuam9pbignLCAnKX0pYCxcbiAgICAgICk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGxhbmd1YWdlOiAke2xhbmd1YWdlfWApO1xuICAgIH1cbiAgICBjb25zdCBzb3VyY2VEaXJlY3RvcnkgPSBwYXRoLmpvaW4odGhpcy5iYXNlUGF0aCwgbGFuZ3VhZ2UpO1xuICAgIGNvbnN0IGhvb2tUZW1wRGlyZWN0b3J5ID0gcGF0aC5qb2luKHRhcmdldERpcmVjdG9yeSwgJ3RtcCcpO1xuICAgIGF3YWl0IGZzLm1rZGlyKGhvb2tUZW1wRGlyZWN0b3J5KTtcbiAgICBhd2FpdCB0aGlzLmluc3RhbGxGaWxlcyhzb3VyY2VEaXJlY3RvcnksIHRhcmdldERpcmVjdG9yeSwge1xuICAgICAgbmFtZTogZGVjYW1lbGl6ZShwYXRoLmJhc2VuYW1lKHBhdGgucmVzb2x2ZSh0YXJnZXREaXJlY3RvcnkpKSksXG4gICAgfSk7XG4gICAgYXdhaXQgdGhpcy5hcHBseUZ1dHVyZUZsYWdzKHRhcmdldERpcmVjdG9yeSk7XG4gICAgYXdhaXQgdGhpcy5pbnZva2VIb29rcyhob29rVGVtcERpcmVjdG9yeSwgdGFyZ2V0RGlyZWN0b3J5KTtcbiAgICBhd2FpdCBmcy5yZW1vdmUoaG9va1RlbXBEaXJlY3RvcnkpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbnN0YWxsRmlsZXMoc291cmNlRGlyZWN0b3J5OiBzdHJpbmcsIHRhcmdldERpcmVjdG9yeTogc3RyaW5nLCBwcm9qZWN0OiBQcm9qZWN0SW5mbykge1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBhd2FpdCBmcy5yZWFkZGlyKHNvdXJjZURpcmVjdG9yeSkpIHtcbiAgICAgIGNvbnN0IGZyb21GaWxlID0gcGF0aC5qb2luKHNvdXJjZURpcmVjdG9yeSwgZmlsZSk7XG4gICAgICBjb25zdCB0b0ZpbGUgPSBwYXRoLmpvaW4odGFyZ2V0RGlyZWN0b3J5LCB0aGlzLmV4cGFuZCh1bmVzY2FwZShmaWxlKSwgcHJvamVjdCkpO1xuICAgICAgaWYgKChhd2FpdCBmcy5zdGF0KGZyb21GaWxlKSkuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICBhd2FpdCBmcy5ta2Rpcih0b0ZpbGUpO1xuICAgICAgICBhd2FpdCB0aGlzLmluc3RhbGxGaWxlcyhmcm9tRmlsZSwgdG9GaWxlLCBwcm9qZWN0KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGZpbGUubWF0Y2goL14uKlxcLnRlbXBsYXRlXFwuW14uXSskLykpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5pbnN0YWxsUHJvY2Vzc2VkKGZyb21GaWxlLCB0b0ZpbGUucmVwbGFjZSgvXFwudGVtcGxhdGUoXFwuW14uXSspJC8sICckMScpLCBwcm9qZWN0KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGZpbGUubWF0Y2goL14uKlxcLmhvb2tcXC4oZC4pP1teLl0rJC8pKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5zdGFsbFByb2Nlc3NlZChmcm9tRmlsZSwgcGF0aC5qb2luKHRhcmdldERpcmVjdG9yeSwgJ3RtcCcsIGZpbGUpLCBwcm9qZWN0KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGZpbGUuZW5kc1dpdGgoJy50ZW1wbGF0ZScpKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5zdGFsbFByb2Nlc3NlZChmcm9tRmlsZSwgdG9GaWxlLnN1YnN0cmluZygwLCB0b0ZpbGUubGVuZ3RoIC0gOSksIHByb2plY3QpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IGZzLmNvcHkoZnJvbUZpbGUsIHRvRmlsZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5ICAgSW52b2tlIGFueSBqYXZhc2NyaXB0IGhvb2tzIHRoYXQgZXhpc3QgaW4gdGhlIHRlbXBsYXRlLlxuICAgKiBAZGVzY3JpcHRpb24gU29tZXRpbWVzIHRlbXBsYXRlcyBuZWVkIG1vcmUgY29tcGxleCBsb2dpYyB0aGFuIGp1c3QgcmVwbGFjaW5nIHRva2Vucy4gQSAnaG9vaycgaXNcbiAgICogICAgICAgIGFueSBmaWxlIHRoYXQgZW5kcyBpbiAuaG9vay5qcy4gSXQgc2hvdWxkIGV4cG9ydCBhIHNpbmdsZSBmdW5jdGlvbiBjYWxsZWQgXCJpbnZva2VcIlxuICAgKiAgICAgICAgdGhhdCBhY2NlcHRzIGEgc2luZ2xlIHN0cmluZyBwYXJhbWV0ZXIuIFdoZW4gdGhlIHRlbXBsYXRlIGlzIGluc3RhbGxlZCwgZWFjaCBob29rXG4gICAqICAgICAgICB3aWxsIGJlIGludm9rZWQsIHBhc3NpbmcgdGhlIHRhcmdldCBkaXJlY3RvcnkgYXMgdGhlIG9ubHkgYXJndW1lbnQuIEhvb2tzIGFyZSBpbnZva2VkXG4gICAqICAgICAgICBpbiBsZXhpY2FsIG9yZGVyLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBpbnZva2VIb29rcyhzb3VyY2VEaXJlY3Rvcnk6IHN0cmluZywgdGFyZ2V0RGlyZWN0b3J5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGZzLnJlYWRkaXIoc291cmNlRGlyZWN0b3J5KTtcbiAgICBmaWxlcy5zb3J0KCk7IC8vIFNvcnRpbmcgYWxsb3dzIHRlbXBsYXRlIGF1dGhvcnMgdG8gY29udHJvbCB0aGUgb3JkZXIgaW4gd2hpY2ggaG9va3MgYXJlIGludm9rZWQuXG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGlmIChmaWxlLm1hdGNoKC9eLipcXC5ob29rXFwuanMkLykpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbiAgICAgICAgY29uc3QgaW52b2tlOiBJbnZva2VIb29rID0gcmVxdWlyZShwYXRoLmpvaW4oc291cmNlRGlyZWN0b3J5LCBmaWxlKSkuaW52b2tlO1xuICAgICAgICBhd2FpdCBpbnZva2UodGFyZ2V0RGlyZWN0b3J5KTtcbiAgICAgICAgY29uc3QgaW52b2tlVW5pdFRlc3Q6IEludm9rZUhvb2sgPSByZXF1aXJlKHBhdGguam9pbihzb3VyY2VEaXJlY3RvcnksIGZpbGUpKS5pbnZva2VVbml0VGVzdDtcbiAgICAgICAgYXdhaXQgaW52b2tlVW5pdFRlc3QodGFyZ2V0RGlyZWN0b3J5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluc3RhbGxQcm9jZXNzZWQodGVtcGxhdGVQYXRoOiBzdHJpbmcsIHRvRmlsZTogc3RyaW5nLCBwcm9qZWN0OiBQcm9qZWN0SW5mbykge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgZnMucmVhZEZpbGUodGVtcGxhdGVQYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xuICAgIGF3YWl0IGZzLndyaXRlRmlsZSh0b0ZpbGUsIHRoaXMuZXhwYW5kKHRlbXBsYXRlLCBwcm9qZWN0KSk7XG4gIH1cblxuICBwcml2YXRlIGV4cGFuZCh0ZW1wbGF0ZTogc3RyaW5nLCBwcm9qZWN0OiBQcm9qZWN0SW5mbykge1xuICAgIGNvbnN0IE1BVENIX1ZFUl9CVUlMRCA9IC9cXCtbYS1mMC05XSskLzsgLy8gTWF0Y2hlcyBcIitCVUlMRFwiIGluIFwieC55LnotYmV0YStCVUlMRFwiXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbiAgICBjb25zdCBjZGtJbmZvID0gcmVxdWlyZSgnLi4vY2RrLWluZm8uanNvbicpO1xuICAgIGNvbnN0IGNka1ZlcnNpb24gPSBjZGtJbmZvLmNka19zZGtfdmVyc2lvbi5yZXBsYWNlKE1BVENIX1ZFUl9CVUlMRCwgJycpO1xuICAgIGNvbnN0IGNka1NlcnZpY2VWZXJzaW9uID0gY2RrSW5mby5jZGtfc2VydmljZV9zZGtfdmVyc2lvbi5yZXBsYWNlKE1BVENIX1ZFUl9CVUlMRCwgJycpO1xuICAgIHJldHVybiB0ZW1wbGF0ZVxuICAgICAgLnJlcGxhY2UoLyVuYW1lJS9nLCBwcm9qZWN0Lm5hbWUpXG4gICAgICAucmVwbGFjZSgvJW5hbWVcXC5jYW1lbENhc2VkJS9nLCBjYW1lbENhc2UocHJvamVjdC5uYW1lKSlcbiAgICAgIC5yZXBsYWNlKC8lbmFtZVxcLlBhc2NhbENhc2VkJS9nLCBjYW1lbENhc2UocHJvamVjdC5uYW1lLCB7IHBhc2NhbENhc2U6IHRydWUgfSkpXG4gICAgICAucmVwbGFjZSgvJWNkay12ZXJzaW9uJS9nLCBjZGtWZXJzaW9uKVxuICAgICAgLnJlcGxhY2UoLyVjZGstc2VydmljZS12ZXJzaW9uJS9nLCBjZGtTZXJ2aWNlVmVyc2lvbilcbiAgICAgIC5yZXBsYWNlKC8lY2RrLWhvbWUlL2csIGNka0hvbWVEaXIoKSlcbiAgICAgIC5yZXBsYWNlKC8lbmFtZVxcLlB5dGhvbk1vZHVsZSUvZywgcHJvamVjdC5uYW1lLnJlcGxhY2UoLy0vZywgJ18nKSlcbiAgICAgIC5yZXBsYWNlKC8lcHl0aG9uLWV4ZWN1dGFibGUlL2csIHB5dGhvbkV4ZWN1dGFibGUoKSlcbiAgICAgIC5yZXBsYWNlKC8lbmFtZVxcLlN0YWNrTmFtZSUvZywgcHJvamVjdC5uYW1lLnJlcGxhY2UoL1teQS1aYS16MC05LV0vZywgJy0nKSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjb250ZXh0IHZhcmlhYmxlcyB0byBgY2RrLmpzb25gIGluIHRoZSBnZW5lcmF0ZWQgcHJvamVjdCBkaXJlY3RvcnkgdG9cbiAgICogZW5hYmxlIGZ1dHVyZSBiZWhhdmlvciBmb3IgbmV3IHByb2plY3RzLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBhcHBseUZ1dHVyZUZsYWdzKHByb2plY3REaXI6IHN0cmluZykge1xuICAgIGNvbnN0IGNka0pzb24gPSBwYXRoLmpvaW4ocHJvamVjdERpciwgJ2Nkay5qc29uJyk7XG4gICAgaWYgKCEoYXdhaXQgZnMucGF0aEV4aXN0cyhjZGtKc29uKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBmcy5yZWFkSnNvbihjZGtKc29uKTtcbiAgICBjb25maWcuY29udGV4dCA9IHtcbiAgICAgIC4uLmNvbmZpZy5jb250ZXh0LFxuICAgICAgLi4uY3hhcGkuRlVUVVJFX0ZMQUdTLFxuICAgIH07XG5cbiAgICBhd2FpdCBmcy53cml0ZUpzb24oY2RrSnNvbiwgY29uZmlnLCB7IHNwYWNlczogMiB9KTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUHJvamVjdEluZm8ge1xuICAvKiogVGhlIHZhbHVlIHVzZWQgZm9yICVuYW1lJSAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBhdmFpbGFibGVJbml0VGVtcGxhdGVzOiBQcm9taXNlPEluaXRUZW1wbGF0ZVtdPiA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlTmFtZXMgPSBhd2FpdCBsaXN0RGlyZWN0b3J5KFRFTVBMQVRFU19ESVIpO1xuICBjb25zdCB0ZW1wbGF0ZXMgPSBuZXcgQXJyYXk8SW5pdFRlbXBsYXRlPigpO1xuICBmb3IgKGNvbnN0IHRlbXBsYXRlTmFtZSBvZiB0ZW1wbGF0ZU5hbWVzKSB7XG4gICAgdGVtcGxhdGVzLnB1c2goYXdhaXQgSW5pdFRlbXBsYXRlLmZyb21OYW1lKHRlbXBsYXRlTmFtZSkpO1xuICB9XG4gIHJlc29sdmUodGVtcGxhdGVzKTtcbn0pO1xuZXhwb3J0IGNvbnN0IGF2YWlsYWJsZUluaXRMYW5ndWFnZXM6IFByb21pc2U8c3RyaW5nW10+ID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgY29uc3QgdGVtcGxhdGVzID0gYXdhaXQgYXZhaWxhYmxlSW5pdFRlbXBsYXRlcztcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgdGVtcGxhdGVzKSB7XG4gICAgZm9yIChjb25zdCBsYW5ndWFnZSBvZiB0ZW1wbGF0ZS5sYW5ndWFnZXMpIHtcbiAgICAgIHJlc3VsdC5hZGQobGFuZ3VhZ2UpO1xuICAgIH1cbiAgfVxuICByZXNvbHZlKFsuLi5yZXN1bHRdKTtcbn0pO1xuLyoqXG4gKiBAcGFyYW0gZGlyUGF0aCBpcyB0aGUgZGlyZWN0b3J5IHRvIGJlIGxpc3RlZC5cbiAqIEByZXR1cm5zIHRoZSBsaXN0IG9mIGZpbGUgb3IgZGlyZWN0b3J5IG5hbWVzIGNvbnRhaW5lZCBpbiBgYGRpclBhdGhgYCwgZXhjbHVkaW5nIGFueSBkb3QtZmlsZSwgYW5kIHNvcnRlZC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbGlzdERpcmVjdG9yeShkaXJQYXRoOiBzdHJpbmcpIHtcbiAgcmV0dXJuIChhd2FpdCBmcy5yZWFkZGlyKGRpclBhdGgpKS5maWx0ZXIoKHApID0+ICFwLnN0YXJ0c1dpdGgoJy4nKSkuc29ydCgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJpbnRBdmFpbGFibGVUZW1wbGF0ZXMobGFuZ3VhZ2U/OiBzdHJpbmcpIHtcbiAgcHJpbnQoJ0F2YWlsYWJsZSB0ZW1wbGF0ZXM6Jyk7XG4gIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgYXdhaXQgYXZhaWxhYmxlSW5pdFRlbXBsYXRlcykge1xuICAgIGlmIChsYW5ndWFnZSAmJiB0ZW1wbGF0ZS5sYW5ndWFnZXMuaW5kZXhPZihsYW5ndWFnZSkgPT09IC0xKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcHJpbnQoYCogJHtjb2xvcnMuZ3JlZW4odGVtcGxhdGUubmFtZSl9OiAke3RlbXBsYXRlLmRlc2NyaXB0aW9ufWApO1xuICAgIGNvbnN0IGxhbmd1YWdlQXJnID0gbGFuZ3VhZ2VcbiAgICAgID8gY29sb3JzLmJvbGQobGFuZ3VhZ2UpXG4gICAgICA6IHRlbXBsYXRlLmxhbmd1YWdlcy5sZW5ndGggPiAxXG4gICAgICA/IGBbJHt0ZW1wbGF0ZS5sYW5ndWFnZXMubWFwKCh0KSA9PiBjb2xvcnMuYm9sZCh0KSkuam9pbignfCcpfV1gXG4gICAgICA6IGNvbG9ycy5ib2xkKHRlbXBsYXRlLmxhbmd1YWdlc1swXSk7XG4gICAgcHJpbnQoYCAgIOKUlOKUgCAke2NvbG9ycy5ibHVlKGBjZGsgaW5pdCAke2NvbG9ycy5ib2xkKHRlbXBsYXRlLm5hbWUpfSAtLWxhbmd1YWdlPSR7bGFuZ3VhZ2VBcmd9YCl9YCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVByb2plY3QoXG4gIHRlbXBsYXRlOiBJbml0VGVtcGxhdGUsXG4gIGxhbmd1YWdlOiBzdHJpbmcsXG4gIGNhblVzZU5ldHdvcms6IGJvb2xlYW4sXG4gIGdlbmVyYXRlT25seTogYm9vbGVhbixcbiAgd29ya0Rpcjogc3RyaW5nLFxuKSB7XG4gIGF3YWl0IGFzc2VydElzRW1wdHlEaXJlY3Rvcnkod29ya0Rpcik7XG5cbiAgcHJpbnQoYEFwcGx5aW5nIHByb2plY3QgdGVtcGxhdGUgJHtjb2xvcnMuZ3JlZW4odGVtcGxhdGUubmFtZSl9IGZvciAke2NvbG9ycy5ibHVlKGxhbmd1YWdlKX1gKTtcbiAgYXdhaXQgdGVtcGxhdGUuaW5zdGFsbChsYW5ndWFnZSwgd29ya0Rpcik7XG4gIGlmIChhd2FpdCBmcy5wYXRoRXhpc3RzKCdSRUFETUUubWQnKSkge1xuICAgIHByaW50KGNvbG9ycy5ncmVlbihhd2FpdCBmcy5yZWFkRmlsZSgnUkVBRE1FLm1kJywgeyBlbmNvZGluZzogJ3V0Zi04JyB9KSkpO1xuICB9XG5cbiAgaWYgKCFnZW5lcmF0ZU9ubHkpIHtcbiAgICBhd2FpdCBpbml0aWFsaXplR2l0UmVwb3NpdG9yeSh3b3JrRGlyKTtcbiAgICBhd2FpdCBwb3N0SW5zdGFsbChsYW5ndWFnZSwgY2FuVXNlTmV0d29yaywgd29ya0Rpcik7XG4gIH1cblxuICBwcmludCgn4pyFIEFsbCBkb25lIScpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBhc3NlcnRJc0VtcHR5RGlyZWN0b3J5KHdvcmtEaXI6IHN0cmluZykge1xuICBjb25zdCBmaWxlcyA9IGF3YWl0IGZzLnJlYWRkaXIod29ya0Rpcik7XG4gIGlmIChmaWxlcy5maWx0ZXIoKGYpID0+ICFmLnN0YXJ0c1dpdGgoJy4nKSkubGVuZ3RoICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgcm9zIGluaXRgIGNhbm5vdCBiZSBydW4gaW4gYSBub24tZW1wdHkgZGlyZWN0b3J5IScpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVHaXRSZXBvc2l0b3J5KHdvcmtEaXI6IHN0cmluZykge1xuICBpZiAoYXdhaXQgaXNJbkdpdFJlcG9zaXRvcnkod29ya0RpcikpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHJpbnQoJ0luaXRpYWxpemluZyBhIG5ldyBnaXQgcmVwb3NpdG9yeS4uLicpO1xuICB0cnkge1xuICAgIGF3YWl0IGV4ZWN1dGUoJ2dpdCcsIFsnaW5pdCddLCB7IGN3ZDogd29ya0RpciB9KTtcbiAgICBhd2FpdCBleGVjdXRlKCdnaXQnLCBbJ2FkZCcsICcuJ10sIHsgY3dkOiB3b3JrRGlyIH0pO1xuICAgIGF3YWl0IGV4ZWN1dGUoJ2dpdCcsIFsnY29tbWl0JywgJy0tbWVzc2FnZT1cIkluaXRpYWwgY29tbWl0XCInLCAnLS1uby1ncGctc2lnbiddLCB7IGN3ZDogd29ya0RpciB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHdhcm5pbmcoJ1VuYWJsZSB0byBpbml0aWFsaXplIGdpdCByZXBvc2l0b3J5IGZvciB5b3VyIHByb2plY3QuJyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdEluc3RhbGwobGFuZ3VhZ2U6IHN0cmluZywgY2FuVXNlTmV0d29yazogYm9vbGVhbiwgd29ya0Rpcjogc3RyaW5nKSB7XG4gIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICBjYXNlICdqYXZhc2NyaXB0JzpcbiAgICAgIHJldHVybiBhd2FpdCBwb3N0SW5zdGFsbEphdmFzY3JpcHQoY2FuVXNlTmV0d29yaywgd29ya0Rpcik7XG4gICAgY2FzZSAndHlwZXNjcmlwdCc6XG4gICAgICByZXR1cm4gYXdhaXQgcG9zdEluc3RhbGxUeXBlc2NyaXB0KGNhblVzZU5ldHdvcmssIHdvcmtEaXIpO1xuICAgIGNhc2UgJ2phdmEnOlxuICAgICAgcmV0dXJuIGF3YWl0IHBvc3RJbnN0YWxsSmF2YShjYW5Vc2VOZXR3b3JrLCB3b3JrRGlyKTtcbiAgICBjYXNlICdweXRob24nOlxuICAgICAgcmV0dXJuIGF3YWl0IHBvc3RJbnN0YWxsUHl0aG9uKHdvcmtEaXIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RJbnN0YWxsSmF2YXNjcmlwdChjYW5Vc2VOZXR3b3JrOiBib29sZWFuLCBjd2Q6IHN0cmluZykge1xuICByZXR1cm4gcG9zdEluc3RhbGxUeXBlc2NyaXB0KGNhblVzZU5ldHdvcmssIGN3ZCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RJbnN0YWxsVHlwZXNjcmlwdChjYW5Vc2VOZXR3b3JrOiBib29sZWFuLCBjd2Q6IHN0cmluZykge1xuICBjb25zdCBjb21tYW5kID0gJ25wbSc7XG5cbiAgaWYgKCFjYW5Vc2VOZXR3b3JrKSB7XG4gICAgd2FybmluZyhgUGxlYXNlIHJ1biAnJHtjb21tYW5kfSBpbnN0YWxsJyFgKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBwcmludChgRXhlY3V0aW5nICR7Y29sb3JzLmdyZWVuKGAke2NvbW1hbmR9IGluc3RhbGxgKX0uLi5gKTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBleGVjdXRlKGNvbW1hbmQsIFsnaW5zdGFsbCddLCB7IGN3ZCB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHdhcm5pbmcoYCR7Y29tbWFuZH0gaW5zdGFsbCBmYWlsZWQ6IGAgKyBlLm1lc3NhZ2UpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RJbnN0YWxsSmF2YShjYW5Vc2VOZXR3b3JrOiBib29sZWFuLCBjd2Q6IHN0cmluZykge1xuICBjb25zdCBtdm5QYWNrYWdlV2FybmluZyA9IFwiUGxlYXNlIHJ1biAnbXZuIHBhY2thZ2UnIVwiO1xuICBpZiAoIWNhblVzZU5ldHdvcmspIHtcbiAgICB3YXJuaW5nKG12blBhY2thZ2VXYXJuaW5nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBwcmludChcIkV4ZWN1dGluZyAnbXZuIHBhY2thZ2UnXCIpO1xuICB0cnkge1xuICAgIGF3YWl0IGV4ZWN1dGUoJ212bicsIFsncGFja2FnZSddLCB7IGN3ZCB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHdhcm5pbmcoJ1VuYWJsZSB0byBwYWNrYWdlIGNvbXBpbGVkIGNvZGUgYXMgSkFSJyk7XG4gICAgd2FybmluZyhtdm5QYWNrYWdlV2FybmluZyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdEluc3RhbGxQeXRob24oY3dkOiBzdHJpbmcpIHtcbiAgY29uc3QgcHl0aG9uID0gcHl0aG9uRXhlY3V0YWJsZSgpO1xuICB3YXJuaW5nKGBQbGVhc2UgcnVuICR7cHl0aG9ufSAtbSB2ZW52IC5lbnYnIWApO1xuICBwcmludChgRXhlY3V0aW5nICR7Y29sb3JzLmdyZWVuKCdDcmVhdGluZyB2aXJ0dWFsZW52Li4uJyl9YCk7XG4gIHRyeSB7XG4gICAgYXdhaXQgZXhlY3V0ZShweXRob24sIFsnLW0gdmVudicsICcuZW52J10sIHsgY3dkIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgd2FybmluZygnVW5hYmxlIHRvIGNyZWF0ZSB2aXJ0dWFsZW52IGF1dG9tYXRpY2FsbHknKTtcbiAgICB3YXJuaW5nKGBQbGVhc2UgcnVuICcke3B5dGhvbn0gLW0gdmVudiAuZW52JyFgKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSBkaXIgYSBkaXJlY3RvcnkgdG8gYmUgY2hlY2tlZFxuICogQHJldHVybnMgdHJ1ZSBpZiBgYGRpcmBgIGlzIHdpdGhpbiBhIGdpdCByZXBvc2l0b3J5LlxuICovXG5hc3luYyBmdW5jdGlvbiBpc0luR2l0UmVwb3NpdG9yeShkaXI6IHN0cmluZykge1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChhd2FpdCBmcy5wYXRoRXhpc3RzKHBhdGguam9pbihkaXIsICcuZ2l0JykpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlzUm9vdChkaXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGRpciA9IHBhdGguZGlybmFtZShkaXIpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIGRpciBhIGRpcmVjdG9yeSB0byBiZSBjaGVja2VkLlxuICogQHJldHVybnMgdHJ1ZSBpZiBgYGRpcmBgIGlzIHRoZSByb290IG9mIGEgZmlsZXN5c3RlbS5cbiAqL1xuZnVuY3Rpb24gaXNSb290KGRpcjogc3RyaW5nKSB7XG4gIHJldHVybiBwYXRoLmRpcm5hbWUoZGlyKSA9PT0gZGlyO1xufVxuXG4vKipcbiAqIEV4ZWN1dGVzIGBjb21tYW5kYC4gU1RERVJSIGlzIGVtaXR0ZWQgaW4gcmVhbC10aW1lLlxuICpcbiAqIElmIGNvbW1hbmQgZXhpdHMgd2l0aCBub24temVybyBleGl0IGNvZGUsIGFuIGV4Y2VwcmlvbiBpcyB0aHJvd24gYW5kIGluY2x1ZGVzXG4gKiB0aGUgY29udGVudHMgb2YgU1RET1VULlxuICpcbiAqIEByZXR1cm5zIFNURE9VVCAoaWYgc3VjY2Vzc2Z1bCkuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGUoY21kOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdLCB7IGN3ZCB9OiB7IGN3ZDogc3RyaW5nIH0pIHtcbiAgY29uc3QgY2hpbGQgPSBjaGlsZFByb2Nlc3Muc3Bhd24oY21kLCBhcmdzLCB7IGN3ZCwgc2hlbGw6IHRydWUsIHN0ZGlvOiBbJ2lnbm9yZScsICdwaXBlJywgJ2luaGVyaXQnXSB9KTtcbiAgbGV0IHN0ZG91dCA9ICcnO1xuICBjaGlsZC5zdGRvdXQub24oJ2RhdGEnLCAoY2h1bmspID0+IChzdGRvdXQgKz0gY2h1bmsudG9TdHJpbmcoKSkpO1xuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigob2ssIGZhaWwpID0+IHtcbiAgICBjaGlsZC5vbmNlKCdlcnJvcicsIChlcnIpID0+IGZhaWwoZXJyKSk7XG4gICAgY2hpbGQub25jZSgnZXhpdCcsIChzdGF0dXMpID0+IHtcbiAgICAgIGlmIChzdGF0dXMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG9rKHN0ZG91dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShzdGRvdXQpO1xuICAgICAgICByZXR1cm4gZmFpbChuZXcgRXJyb3IoYCR7Y21kfSBleGl0ZWQgd2l0aCBzdGF0dXMgJHtzdGF0dXN9YCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiJdfQ==