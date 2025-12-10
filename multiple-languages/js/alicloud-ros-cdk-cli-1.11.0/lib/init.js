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
        (0, logging_1.warning)(`No --language was provided, but '${appName}' supports only '${language}', so defaulting to --language=${language}`);
    }
    if (!language) {
        (0, logging_1.print)(`Available languages for ${colors.green(appName)}: ${template.languages.map((l) => colors.blue(l)).join(', ')}`);
        throw new Error('No language was selected');
    }
    await initializeProject(template, language, canUseNetwork, generateOnly, workDir);
    (0, cdk_toolkit_1.writeAndUpdateLanguageInfo)(language);
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
    static async fromName(name) {
        const basePath = path.join(TEMPLATES_DIR, name);
        const languages = (await listDirectory(basePath)).filter((f) => f !== INFO_DOT_JSON);
        const info = await fs.readJson(path.join(basePath, INFO_DOT_JSON));
        return new InitTemplate(basePath, name, languages, info);
    }
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
            (0, logging_1.error)(`The ${colors.blue(language)} language is not supported for ${colors.green(this.name)} ` +
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
            .replace(/%cdk-home%/g, (0, directories_1.cdkHomeDir)())
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
    (0, logging_1.print)('Available templates:');
    for (const template of await exports.availableInitTemplates) {
        if (language && template.languages.indexOf(language) === -1) {
            continue;
        }
        (0, logging_1.print)(`* ${colors.green(template.name)}: ${template.description}`);
        const languageArg = language
            ? colors.bold(language)
            : template.languages.length > 1
                ? `[${template.languages.map((t) => colors.bold(t)).join('|')}]`
                : colors.bold(template.languages[0]);
        (0, logging_1.print)(`   └─ ${colors.blue(`cdk init ${colors.bold(template.name)} --language=${languageArg}`)}`);
    }
}
exports.printAvailableTemplates = printAvailableTemplates;
async function initializeProject(template, language, canUseNetwork, generateOnly, workDir) {
    await assertIsEmptyDirectory(workDir);
    (0, logging_1.print)(`Applying project template ${colors.green(template.name)} for ${colors.blue(language)}`);
    await template.install(language, workDir);
    if (await fs.pathExists('README.md')) {
        (0, logging_1.print)(colors.green(await fs.readFile('README.md', { encoding: 'utf-8' })));
    }
    if (!generateOnly) {
        await initializeGitRepository(workDir);
        await postInstall(language, canUseNetwork, workDir);
    }
    (0, logging_1.print)('✅ All done!');
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
    (0, logging_1.print)('Initializing a new git repository...');
    try {
        await execute('git', ['init'], { cwd: workDir });
        await execute('git', ['add', '.'], { cwd: workDir });
        await execute('git', ['commit', '--message="Initial commit"', '--no-gpg-sign'], { cwd: workDir });
    }
    catch (e) {
        (0, logging_1.warning)('Unable to initialize git repository for your project.');
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
        (0, logging_1.warning)(`Please run '${command} install'!`);
        return;
    }
    (0, logging_1.print)(`Executing ${colors.green(`${command} install`)}...`);
    try {
        await execute(command, ['install'], { cwd });
    }
    catch (e) {
        (0, logging_1.warning)(`${command} install failed: ` + e.message);
    }
}
async function postInstallJava(canUseNetwork, cwd) {
    const mvnPackageWarning = "Please run 'mvn package'!";
    if (!canUseNetwork) {
        (0, logging_1.warning)(mvnPackageWarning);
        return;
    }
    (0, logging_1.print)("Executing 'mvn package'");
    try {
        await execute('mvn', ['package'], { cwd });
    }
    catch (e) {
        (0, logging_1.warning)('Unable to package compiled code as JAR');
        (0, logging_1.warning)(mvnPackageWarning);
    }
}
async function postInstallPython(cwd) {
    const python = pythonExecutable();
    (0, logging_1.warning)(`Please run ${python} -m venv .env'!`);
    (0, logging_1.print)(`Executing ${colors.green('Creating virtualenv...')}`);
    try {
        await execute(python, ['-m venv', '.env'], { cwd });
    }
    catch (e) {
        (0, logging_1.warning)('Unable to create virtualenv automatically');
        (0, logging_1.warning)(`Please run '${python} -m venv .env'!`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQWlEO0FBQ2pELDhDQUE4QztBQUM5QyxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qix1Q0FBa0Q7QUFDbEQsb0RBQWdEO0FBQ2hELCtDQUEwRDtBQUkxRCxzRkFBc0Y7QUFDdEYsaUVBQWlFO0FBQ2pFLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN2QyxpRUFBaUU7QUFDakUsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pDLGdDQUFnQztBQUVoQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRTdEOztHQUVHO0FBQ0ksS0FBSyxVQUFVLE9BQU8sQ0FDM0IsT0FBZ0IsRUFDaEIsUUFBaUIsRUFDakIsYUFBYSxHQUFHLElBQUksRUFDcEIsWUFBWSxHQUFHLEtBQUssRUFDcEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUU7SUFFdkIsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUN6QixNQUFNLHVCQUF1QixFQUFFLENBQUM7UUFDaEMsT0FBTztLQUNSO0lBRUQsT0FBTyxHQUFHLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyx1REFBdUQ7SUFFdkYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLDhCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQVEsQ0FBQyxDQUFDLENBQUM7SUFDakYsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNiLE1BQU0sdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsT0FBTyxF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QUU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsdUJBQXVCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMvRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hhcGkgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY3hhcGknO1xuaW1wb3J0ICogYXMgY2hpbGRQcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBlcnJvciwgcHJpbnQsIHdhcm5pbmcgfSBmcm9tICcuL2xvZ2dpbmcnO1xuaW1wb3J0IHsgY2RrSG9tZURpciB9IGZyb20gJy4vdXRpbC9kaXJlY3Rvcmllcyc7XG5pbXBvcnQgeyB3cml0ZUFuZFVwZGF0ZUxhbmd1YWdlSW5mbyB9IGZyb20gJy4vY2RrLXRvb2xraXQnXG5cbmV4cG9ydCB0eXBlIEludm9rZUhvb2sgPSAodGFyZ2V0RGlyZWN0b3J5OiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5cbi8vIHRzbGludDpkaXNhYmxlOm5vLXZhci1yZXF1aXJlcyB0aG9zZSBsaWJyYXJpZXMgZG9uJ3QgaGF2ZSB1cC10by1kYXRlIEB0eXBlcyBtb2R1bGVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuY29uc3QgY2FtZWxDYXNlID0gcmVxdWlyZSgnY2FtZWxjYXNlJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuY29uc3QgZGVjYW1lbGl6ZSA9IHJlcXVpcmUoJ2RlY2FtZWxpemUnKTtcbi8vIHRzbGludDplbmFibGU6bm8tdmFyLXJlcXVpcmVzXG5cbmNvbnN0IFRFTVBMQVRFU19ESVIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnaW5pdC10ZW1wbGF0ZXMnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgQ0RLIHBhY2thZ2UgaW4gdGhlIGN1cnJlbnQgZGlyZWN0b3J5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGlJbml0KFxuICBhcHBOYW1lPzogc3RyaW5nLFxuICBsYW5ndWFnZT86IHN0cmluZyxcbiAgY2FuVXNlTmV0d29yayA9IHRydWUsXG4gIGdlbmVyYXRlT25seSA9IGZhbHNlLFxuICB3b3JrRGlyID0gcHJvY2Vzcy5jd2QoKSxcbikge1xuICBpZiAoIWFwcE5hbWUgJiYgIWxhbmd1YWdlKSB7XG4gICAgYXdhaXQgcHJpbnRBdmFpbGFibGVUZW1wbGF0ZXMoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBhcHBOYW1lID0gYXBwTmFtZSB8fCAnZGVmYXVsdCc7IC8vIFwiZGVmYXVsdFwiIGlzIHRoZSBkZWZhdWx0IGFwcE5hbWUgKGFuZCBtYXBzIHRvIFwiYXBwXCIpXG5cbiAgY29uc3QgdGVtcGxhdGUgPSAoYXdhaXQgYXZhaWxhYmxlSW5pdFRlbXBsYXRlcykuZmluZCgodCkgPT4gdC5oYXNOYW1lKGFwcE5hbWUhKSk7XG4gIGlmICghdGVtcGxhdGUpIHtcbiAgICBhd2FpdCBwcmludEF2YWlsYWJsZVRlbXBsYXRlcyhsYW5ndWFnZSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGluaXQgdGVtcGxhdGU6ICR7YXBwTmFtZX1gKTtcbiAgfVxuICBpZiAoIWxhbmd1YWdlICYmIHRlbXBsYXRlLmxhbmd1YWdlcy5sZW5ndGggPT09IDEpIHtcbiAgICBsYW5ndWFnZSA9IHRlbXBsYXRlLmxhbmd1YWdlc1swXTtcbiAgICB3YXJuaW5nKFxuICAgICAgYE5vIC0tbGFuZ3VhZ2Ugd2FzIHByb3ZpZGVkLCBidXQgJyR7YXBwTmFtZX0nIHN1cHBvcnRzIG9ubHkgJyR7bGFuZ3VhZ2V9Jywgc28gZGVmYXVsdGluZyB0byAtLWxhbmd1YWdlPSR7bGFuZ3VhZ2V9YCxcbiAgICApO1xuICB9XG4gIGlmICghbGFuZ3VhZ2UpIHtcbiAgICBwcmludChcbiAgICAgIGBBdmFpbGFibGUgbGFuZ3VhZ2VzIGZvciAke2NvbG9ycy5ncmVlbihhcHBOYW1lKX06ICR7dGVtcGxhdGUubGFuZ3VhZ2VzLm1hcCgobCkgPT4gY29sb3JzLmJsdWUobCkpLmpvaW4oJywgJyl9YCxcbiAgICApO1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbGFuZ3VhZ2Ugd2FzIHNlbGVjdGVkJyk7XG4gIH1cblxuICBhd2FpdCBpbml0aWFsaXplUHJvamVjdCh0ZW1wbGF0ZSwgbGFuZ3VhZ2UsIGNhblVzZU5ldHdvcmssIGdlbmVyYXRlT25seSwgd29ya0Rpcik7XG4gIHdyaXRlQW5kVXBkYXRlTGFuZ3VhZ2VJbmZvKGxhbmd1YWdlKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBQeXRob24gZXhlY3V0YWJsZSBmb3IgdGhpcyBPU1xuICovXG5mdW5jdGlvbiBweXRob25FeGVjdXRhYmxlKCkge1xuICBsZXQgcHl0aG9uID0gJ3B5dGhvbjMnO1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgIHB5dGhvbiA9ICdweXRob24nO1xuICB9XG4gIHJldHVybiBweXRob247XG59XG5jb25zdCBJTkZPX0RPVF9KU09OID0gJ2luZm8uanNvbic7XG5cbmV4cG9ydCBjbGFzcyBJbml0VGVtcGxhdGUge1xuICBwdWJsaWMgc3RhdGljIGFzeW5jIGZyb21OYW1lKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGJhc2VQYXRoID0gcGF0aC5qb2luKFRFTVBMQVRFU19ESVIsIG5hbWUpO1xuICAgIGNvbnN0IGxhbmd1YWdlcyA9IChhd2FpdCBsaXN0RGlyZWN0b3J5KGJhc2VQYXRoKSkuZmlsdGVyKChmKSA9PiBmICE9PSBJTkZPX0RPVF9KU09OKTtcbiAgICBjb25zdCBpbmZvID0gYXdhaXQgZnMucmVhZEpzb24ocGF0aC5qb2luKGJhc2VQYXRoLCBJTkZPX0RPVF9KU09OKSk7XG4gICAgcmV0dXJuIG5ldyBJbml0VGVtcGxhdGUoYmFzZVBhdGgsIG5hbWUsIGxhbmd1YWdlcywgaW5mbyk7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcHVibGljIHJlYWRvbmx5IGFsaWFzZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJhc2VQYXRoOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2VzOiBzdHJpbmdbXSxcbiAgICBpbmZvOiBhbnksXG4gICkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBpbmZvLmRlc2NyaXB0aW9uO1xuICAgIGZvciAoY29uc3QgYWxpYXMgb2YgaW5mby5hbGlhc2VzIHx8IFtdKSB7XG4gICAgICB0aGlzLmFsaWFzZXMuYWRkKGFsaWFzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgdGhhdCBpcyBiZWluZyBjaGVja2VkXG4gICAqIEByZXR1cm5zIGBgdHJ1ZWBgIGlmIGBgbmFtZWBgIGlzIHRoZSBuYW1lIG9mIHRoaXMgdGVtcGxhdGUgb3IgYW4gYWxpYXMgb2YgaXQuXG4gICAqL1xuICBwdWJsaWMgaGFzTmFtZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gdGhpcy5uYW1lIHx8IHRoaXMuYWxpYXNlcy5oYXMobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGBgSW5pdFRlbXBsYXRlYGAgZm9yIGEgZ2l2ZW4gbGFuZ3VhZ2UgdG8gYSBzcGVjaWZpZWQgZm9sZGVyLlxuICAgKlxuICAgKiBAcGFyYW0gbGFuZ3VhZ2UgICAgdGhlIGxhbmd1YWdlIHRvIGluc3RhbnRpYXRlIHRoaXMgdGVtcGxhdGUgd2l0aFxuICAgKiBAcGFyYW0gdGFyZ2V0RGlyZWN0b3J5IHRoZSBkaXJlY3Rvcnkgd2hlcmUgdGhlIHRlbXBsYXRlIGlzIHRvIGJlIGluc3RhbnRpYXRlZCBpbnRvXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgaW5zdGFsbChsYW5ndWFnZTogc3RyaW5nLCB0YXJnZXREaXJlY3Rvcnk6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmxhbmd1YWdlcy5pbmRleE9mKGxhbmd1YWdlKSA9PT0gLTEpIHtcbiAgICAgIGVycm9yKFxuICAgICAgICBgVGhlICR7Y29sb3JzLmJsdWUobGFuZ3VhZ2UpfSBsYW5ndWFnZSBpcyBub3Qgc3VwcG9ydGVkIGZvciAke2NvbG9ycy5ncmVlbih0aGlzLm5hbWUpfSBgICtcbiAgICAgICAgICBgKGl0IHN1cHBvcnRzOiAke3RoaXMubGFuZ3VhZ2VzLm1hcCgobCkgPT4gY29sb3JzLmJsdWUobCkpLmpvaW4oJywgJyl9KWAsXG4gICAgICApO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBsYW5ndWFnZTogJHtsYW5ndWFnZX1gKTtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlRGlyZWN0b3J5ID0gcGF0aC5qb2luKHRoaXMuYmFzZVBhdGgsIGxhbmd1YWdlKTtcbiAgICBjb25zdCBob29rVGVtcERpcmVjdG9yeSA9IHBhdGguam9pbih0YXJnZXREaXJlY3RvcnksICd0bXAnKTtcbiAgICBhd2FpdCBmcy5ta2Rpcihob29rVGVtcERpcmVjdG9yeSk7XG4gICAgYXdhaXQgdGhpcy5pbnN0YWxsRmlsZXMoc291cmNlRGlyZWN0b3J5LCB0YXJnZXREaXJlY3RvcnksIHtcbiAgICAgIG5hbWU6IGRlY2FtZWxpemUocGF0aC5iYXNlbmFtZShwYXRoLnJlc29sdmUodGFyZ2V0RGlyZWN0b3J5KSkpLFxuICAgIH0pO1xuICAgIGF3YWl0IHRoaXMuYXBwbHlGdXR1cmVGbGFncyh0YXJnZXREaXJlY3RvcnkpO1xuICAgIGF3YWl0IHRoaXMuaW52b2tlSG9va3MoaG9va1RlbXBEaXJlY3RvcnksIHRhcmdldERpcmVjdG9yeSk7XG4gICAgYXdhaXQgZnMucmVtb3ZlKGhvb2tUZW1wRGlyZWN0b3J5KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaW5zdGFsbEZpbGVzKHNvdXJjZURpcmVjdG9yeTogc3RyaW5nLCB0YXJnZXREaXJlY3Rvcnk6IHN0cmluZywgcHJvamVjdDogUHJvamVjdEluZm8pIHtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgYXdhaXQgZnMucmVhZGRpcihzb3VyY2VEaXJlY3RvcnkpKSB7XG4gICAgICBjb25zdCBmcm9tRmlsZSA9IHBhdGguam9pbihzb3VyY2VEaXJlY3RvcnksIGZpbGUpO1xuICAgICAgY29uc3QgdG9GaWxlID0gcGF0aC5qb2luKHRhcmdldERpcmVjdG9yeSwgdGhpcy5leHBhbmQodW5lc2NhcGUoZmlsZSksIHByb2plY3QpKTtcbiAgICAgIGlmICgoYXdhaXQgZnMuc3RhdChmcm9tRmlsZSkpLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgYXdhaXQgZnMubWtkaXIodG9GaWxlKTtcbiAgICAgICAgYXdhaXQgdGhpcy5pbnN0YWxsRmlsZXMoZnJvbUZpbGUsIHRvRmlsZSwgcHJvamVjdCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChmaWxlLm1hdGNoKC9eLipcXC50ZW1wbGF0ZVxcLlteLl0rJC8pKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5zdGFsbFByb2Nlc3NlZChmcm9tRmlsZSwgdG9GaWxlLnJlcGxhY2UoL1xcLnRlbXBsYXRlKFxcLlteLl0rKSQvLCAnJDEnKSwgcHJvamVjdCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChmaWxlLm1hdGNoKC9eLipcXC5ob29rXFwuKGQuKT9bXi5dKyQvKSkge1xuICAgICAgICBhd2FpdCB0aGlzLmluc3RhbGxQcm9jZXNzZWQoZnJvbUZpbGUsIHBhdGguam9pbih0YXJnZXREaXJlY3RvcnksICd0bXAnLCBmaWxlKSwgcHJvamVjdCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChmaWxlLmVuZHNXaXRoKCcudGVtcGxhdGUnKSkge1xuICAgICAgICBhd2FpdCB0aGlzLmluc3RhbGxQcm9jZXNzZWQoZnJvbUZpbGUsIHRvRmlsZS5zdWJzdHJpbmcoMCwgdG9GaWxlLmxlbmd0aCAtIDkpLCBwcm9qZWN0KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBmcy5jb3B5KGZyb21GaWxlLCB0b0ZpbGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSAgIEludm9rZSBhbnkgamF2YXNjcmlwdCBob29rcyB0aGF0IGV4aXN0IGluIHRoZSB0ZW1wbGF0ZS5cbiAgICogQGRlc2NyaXB0aW9uIFNvbWV0aW1lcyB0ZW1wbGF0ZXMgbmVlZCBtb3JlIGNvbXBsZXggbG9naWMgdGhhbiBqdXN0IHJlcGxhY2luZyB0b2tlbnMuIEEgJ2hvb2snIGlzXG4gICAqICAgICAgICBhbnkgZmlsZSB0aGF0IGVuZHMgaW4gLmhvb2suanMuIEl0IHNob3VsZCBleHBvcnQgYSBzaW5nbGUgZnVuY3Rpb24gY2FsbGVkIFwiaW52b2tlXCJcbiAgICogICAgICAgIHRoYXQgYWNjZXB0cyBhIHNpbmdsZSBzdHJpbmcgcGFyYW1ldGVyLiBXaGVuIHRoZSB0ZW1wbGF0ZSBpcyBpbnN0YWxsZWQsIGVhY2ggaG9va1xuICAgKiAgICAgICAgd2lsbCBiZSBpbnZva2VkLCBwYXNzaW5nIHRoZSB0YXJnZXQgZGlyZWN0b3J5IGFzIHRoZSBvbmx5IGFyZ3VtZW50LiBIb29rcyBhcmUgaW52b2tlZFxuICAgKiAgICAgICAgaW4gbGV4aWNhbCBvcmRlci5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgaW52b2tlSG9va3Moc291cmNlRGlyZWN0b3J5OiBzdHJpbmcsIHRhcmdldERpcmVjdG9yeTogc3RyaW5nKSB7XG4gICAgY29uc3QgZmlsZXMgPSBhd2FpdCBmcy5yZWFkZGlyKHNvdXJjZURpcmVjdG9yeSk7XG4gICAgZmlsZXMuc29ydCgpOyAvLyBTb3J0aW5nIGFsbG93cyB0ZW1wbGF0ZSBhdXRob3JzIHRvIGNvbnRyb2wgdGhlIG9yZGVyIGluIHdoaWNoIGhvb2tzIGFyZSBpbnZva2VkLlxuXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICBpZiAoZmlsZS5tYXRjaCgvXi4qXFwuaG9va1xcLmpzJC8pKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG4gICAgICAgIGNvbnN0IGludm9rZTogSW52b2tlSG9vayA9IHJlcXVpcmUocGF0aC5qb2luKHNvdXJjZURpcmVjdG9yeSwgZmlsZSkpLmludm9rZTtcbiAgICAgICAgYXdhaXQgaW52b2tlKHRhcmdldERpcmVjdG9yeSk7XG4gICAgICAgIGNvbnN0IGludm9rZVVuaXRUZXN0OiBJbnZva2VIb29rID0gcmVxdWlyZShwYXRoLmpvaW4oc291cmNlRGlyZWN0b3J5LCBmaWxlKSkuaW52b2tlVW5pdFRlc3Q7XG4gICAgICAgIGF3YWl0IGludm9rZVVuaXRUZXN0KHRhcmdldERpcmVjdG9yeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbnN0YWxsUHJvY2Vzc2VkKHRlbXBsYXRlUGF0aDogc3RyaW5nLCB0b0ZpbGU6IHN0cmluZywgcHJvamVjdDogUHJvamVjdEluZm8pIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IGZzLnJlYWRGaWxlKHRlbXBsYXRlUGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KTtcbiAgICBhd2FpdCBmcy53cml0ZUZpbGUodG9GaWxlLCB0aGlzLmV4cGFuZCh0ZW1wbGF0ZSwgcHJvamVjdCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHBhbmQodGVtcGxhdGU6IHN0cmluZywgcHJvamVjdDogUHJvamVjdEluZm8pIHtcbiAgICBjb25zdCBNQVRDSF9WRVJfQlVJTEQgPSAvXFwrW2EtZjAtOV0rJC87IC8vIE1hdGNoZXMgXCIrQlVJTERcIiBpbiBcIngueS56LWJldGErQlVJTERcIlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG4gICAgY29uc3QgY2RrSW5mbyA9IHJlcXVpcmUoJy4uL2Nkay1pbmZvLmpzb24nKTtcbiAgICBjb25zdCBjZGtWZXJzaW9uID0gY2RrSW5mby5jZGtfc2RrX3ZlcnNpb24ucmVwbGFjZShNQVRDSF9WRVJfQlVJTEQsICcnKTtcbiAgICBjb25zdCBjZGtTZXJ2aWNlVmVyc2lvbiA9IGNka0luZm8uY2RrX3NlcnZpY2Vfc2RrX3ZlcnNpb24ucmVwbGFjZShNQVRDSF9WRVJfQlVJTEQsICcnKTtcbiAgICByZXR1cm4gdGVtcGxhdGVcbiAgICAgIC5yZXBsYWNlKC8lbmFtZSUvZywgcHJvamVjdC5uYW1lKVxuICAgICAgLnJlcGxhY2UoLyVuYW1lXFwuY2FtZWxDYXNlZCUvZywgY2FtZWxDYXNlKHByb2plY3QubmFtZSkpXG4gICAgICAucmVwbGFjZSgvJW5hbWVcXC5QYXNjYWxDYXNlZCUvZywgY2FtZWxDYXNlKHByb2plY3QubmFtZSwgeyBwYXNjYWxDYXNlOiB0cnVlIH0pKVxuICAgICAgLnJlcGxhY2UoLyVjZGstdmVyc2lvbiUvZywgY2RrVmVyc2lvbilcbiAgICAgIC5yZXBsYWNlKC8lY2RrLXNlcnZpY2UtdmVyc2lvbiUvZywgY2RrU2VydmljZVZlcnNpb24pXG4gICAgICAucmVwbGFjZSgvJWNkay1ob21lJS9nLCBjZGtIb21lRGlyKCkpXG4gICAgICAucmVwbGFjZSgvJW5hbWVcXC5QeXRob25Nb2R1bGUlL2csIHByb2plY3QubmFtZS5yZXBsYWNlKC8tL2csICdfJykpXG4gICAgICAucmVwbGFjZSgvJXB5dGhvbi1leGVjdXRhYmxlJS9nLCBweXRob25FeGVjdXRhYmxlKCkpXG4gICAgICAucmVwbGFjZSgvJW5hbWVcXC5TdGFja05hbWUlL2csIHByb2plY3QubmFtZS5yZXBsYWNlKC9bXkEtWmEtejAtOS1dL2csICctJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY29udGV4dCB2YXJpYWJsZXMgdG8gYGNkay5qc29uYCBpbiB0aGUgZ2VuZXJhdGVkIHByb2plY3QgZGlyZWN0b3J5IHRvXG4gICAqIGVuYWJsZSBmdXR1cmUgYmVoYXZpb3IgZm9yIG5ldyBwcm9qZWN0cy5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgYXBwbHlGdXR1cmVGbGFncyhwcm9qZWN0RGlyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjZGtKc29uID0gcGF0aC5qb2luKHByb2plY3REaXIsICdjZGsuanNvbicpO1xuICAgIGlmICghKGF3YWl0IGZzLnBhdGhFeGlzdHMoY2RrSnNvbikpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgZnMucmVhZEpzb24oY2RrSnNvbik7XG4gICAgY29uZmlnLmNvbnRleHQgPSB7XG4gICAgICAuLi5jb25maWcuY29udGV4dCxcbiAgICAgIC4uLmN4YXBpLkZVVFVSRV9GTEFHUyxcbiAgICB9O1xuXG4gICAgYXdhaXQgZnMud3JpdGVKc29uKGNka0pzb24sIGNvbmZpZywgeyBzcGFjZXM6IDIgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFByb2plY3RJbmZvIHtcbiAgLyoqIFRoZSB2YWx1ZSB1c2VkIGZvciAlbmFtZSUgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgYXZhaWxhYmxlSW5pdFRlbXBsYXRlczogUHJvbWlzZTxJbml0VGVtcGxhdGVbXT4gPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZU5hbWVzID0gYXdhaXQgbGlzdERpcmVjdG9yeShURU1QTEFURVNfRElSKTtcbiAgY29uc3QgdGVtcGxhdGVzID0gbmV3IEFycmF5PEluaXRUZW1wbGF0ZT4oKTtcbiAgZm9yIChjb25zdCB0ZW1wbGF0ZU5hbWUgb2YgdGVtcGxhdGVOYW1lcykge1xuICAgIHRlbXBsYXRlcy5wdXNoKGF3YWl0IEluaXRUZW1wbGF0ZS5mcm9tTmFtZSh0ZW1wbGF0ZU5hbWUpKTtcbiAgfVxuICByZXNvbHZlKHRlbXBsYXRlcyk7XG59KTtcbmV4cG9ydCBjb25zdCBhdmFpbGFibGVJbml0TGFuZ3VhZ2VzOiBQcm9taXNlPHN0cmluZ1tdPiA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlcyA9IGF3YWl0IGF2YWlsYWJsZUluaXRUZW1wbGF0ZXM7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRlbXBsYXRlcykge1xuICAgIGZvciAoY29uc3QgbGFuZ3VhZ2Ugb2YgdGVtcGxhdGUubGFuZ3VhZ2VzKSB7XG4gICAgICByZXN1bHQuYWRkKGxhbmd1YWdlKTtcbiAgICB9XG4gIH1cbiAgcmVzb2x2ZShbLi4ucmVzdWx0XSk7XG59KTtcbi8qKlxuICogQHBhcmFtIGRpclBhdGggaXMgdGhlIGRpcmVjdG9yeSB0byBiZSBsaXN0ZWQuXG4gKiBAcmV0dXJucyB0aGUgbGlzdCBvZiBmaWxlIG9yIGRpcmVjdG9yeSBuYW1lcyBjb250YWluZWQgaW4gYGBkaXJQYXRoYGAsIGV4Y2x1ZGluZyBhbnkgZG90LWZpbGUsIGFuZCBzb3J0ZWQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxpc3REaXJlY3RvcnkoZGlyUGF0aDogc3RyaW5nKSB7XG4gIHJldHVybiAoYXdhaXQgZnMucmVhZGRpcihkaXJQYXRoKSkuZmlsdGVyKChwKSA9PiAhcC5zdGFydHNXaXRoKCcuJykpLnNvcnQoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByaW50QXZhaWxhYmxlVGVtcGxhdGVzKGxhbmd1YWdlPzogc3RyaW5nKSB7XG4gIHByaW50KCdBdmFpbGFibGUgdGVtcGxhdGVzOicpO1xuICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIGF3YWl0IGF2YWlsYWJsZUluaXRUZW1wbGF0ZXMpIHtcbiAgICBpZiAobGFuZ3VhZ2UgJiYgdGVtcGxhdGUubGFuZ3VhZ2VzLmluZGV4T2YobGFuZ3VhZ2UpID09PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHByaW50KGAqICR7Y29sb3JzLmdyZWVuKHRlbXBsYXRlLm5hbWUpfTogJHt0ZW1wbGF0ZS5kZXNjcmlwdGlvbn1gKTtcbiAgICBjb25zdCBsYW5ndWFnZUFyZyA9IGxhbmd1YWdlXG4gICAgICA/IGNvbG9ycy5ib2xkKGxhbmd1YWdlKVxuICAgICAgOiB0ZW1wbGF0ZS5sYW5ndWFnZXMubGVuZ3RoID4gMVxuICAgICAgPyBgWyR7dGVtcGxhdGUubGFuZ3VhZ2VzLm1hcCgodCkgPT4gY29sb3JzLmJvbGQodCkpLmpvaW4oJ3wnKX1dYFxuICAgICAgOiBjb2xvcnMuYm9sZCh0ZW1wbGF0ZS5sYW5ndWFnZXNbMF0pO1xuICAgIHByaW50KGAgICDilJTilIAgJHtjb2xvcnMuYmx1ZShgY2RrIGluaXQgJHtjb2xvcnMuYm9sZCh0ZW1wbGF0ZS5uYW1lKX0gLS1sYW5ndWFnZT0ke2xhbmd1YWdlQXJnfWApfWApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVQcm9qZWN0KFxuICB0ZW1wbGF0ZTogSW5pdFRlbXBsYXRlLFxuICBsYW5ndWFnZTogc3RyaW5nLFxuICBjYW5Vc2VOZXR3b3JrOiBib29sZWFuLFxuICBnZW5lcmF0ZU9ubHk6IGJvb2xlYW4sXG4gIHdvcmtEaXI6IHN0cmluZyxcbikge1xuICBhd2FpdCBhc3NlcnRJc0VtcHR5RGlyZWN0b3J5KHdvcmtEaXIpO1xuXG4gIHByaW50KGBBcHBseWluZyBwcm9qZWN0IHRlbXBsYXRlICR7Y29sb3JzLmdyZWVuKHRlbXBsYXRlLm5hbWUpfSBmb3IgJHtjb2xvcnMuYmx1ZShsYW5ndWFnZSl9YCk7XG4gIGF3YWl0IHRlbXBsYXRlLmluc3RhbGwobGFuZ3VhZ2UsIHdvcmtEaXIpO1xuICBpZiAoYXdhaXQgZnMucGF0aEV4aXN0cygnUkVBRE1FLm1kJykpIHtcbiAgICBwcmludChjb2xvcnMuZ3JlZW4oYXdhaXQgZnMucmVhZEZpbGUoJ1JFQURNRS5tZCcsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSkpKTtcbiAgfVxuXG4gIGlmICghZ2VuZXJhdGVPbmx5KSB7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZUdpdFJlcG9zaXRvcnkod29ya0Rpcik7XG4gICAgYXdhaXQgcG9zdEluc3RhbGwobGFuZ3VhZ2UsIGNhblVzZU5ldHdvcmssIHdvcmtEaXIpO1xuICB9XG5cbiAgcHJpbnQoJ+KchSBBbGwgZG9uZSEnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXNzZXJ0SXNFbXB0eURpcmVjdG9yeSh3b3JrRGlyOiBzdHJpbmcpIHtcbiAgY29uc3QgZmlsZXMgPSBhd2FpdCBmcy5yZWFkZGlyKHdvcmtEaXIpO1xuICBpZiAoZmlsZXMuZmlsdGVyKChmKSA9PiAhZi5zdGFydHNXaXRoKCcuJykpLmxlbmd0aCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYHJvcyBpbml0YCBjYW5ub3QgYmUgcnVuIGluIGEgbm9uLWVtcHR5IGRpcmVjdG9yeSEnKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplR2l0UmVwb3NpdG9yeSh3b3JrRGlyOiBzdHJpbmcpIHtcbiAgaWYgKGF3YWl0IGlzSW5HaXRSZXBvc2l0b3J5KHdvcmtEaXIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHByaW50KCdJbml0aWFsaXppbmcgYSBuZXcgZ2l0IHJlcG9zaXRvcnkuLi4nKTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBleGVjdXRlKCdnaXQnLCBbJ2luaXQnXSwgeyBjd2Q6IHdvcmtEaXIgfSk7XG4gICAgYXdhaXQgZXhlY3V0ZSgnZ2l0JywgWydhZGQnLCAnLiddLCB7IGN3ZDogd29ya0RpciB9KTtcbiAgICBhd2FpdCBleGVjdXRlKCdnaXQnLCBbJ2NvbW1pdCcsICctLW1lc3NhZ2U9XCJJbml0aWFsIGNvbW1pdFwiJywgJy0tbm8tZ3BnLXNpZ24nXSwgeyBjd2Q6IHdvcmtEaXIgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3YXJuaW5nKCdVbmFibGUgdG8gaW5pdGlhbGl6ZSBnaXQgcmVwb3NpdG9yeSBmb3IgeW91ciBwcm9qZWN0LicpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RJbnN0YWxsKGxhbmd1YWdlOiBzdHJpbmcsIGNhblVzZU5ldHdvcms6IGJvb2xlYW4sIHdvcmtEaXI6IHN0cmluZykge1xuICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgY2FzZSAnamF2YXNjcmlwdCc6XG4gICAgICByZXR1cm4gYXdhaXQgcG9zdEluc3RhbGxKYXZhc2NyaXB0KGNhblVzZU5ldHdvcmssIHdvcmtEaXIpO1xuICAgIGNhc2UgJ3R5cGVzY3JpcHQnOlxuICAgICAgcmV0dXJuIGF3YWl0IHBvc3RJbnN0YWxsVHlwZXNjcmlwdChjYW5Vc2VOZXR3b3JrLCB3b3JrRGlyKTtcbiAgICBjYXNlICdqYXZhJzpcbiAgICAgIHJldHVybiBhd2FpdCBwb3N0SW5zdGFsbEphdmEoY2FuVXNlTmV0d29yaywgd29ya0Rpcik7XG4gICAgY2FzZSAncHl0aG9uJzpcbiAgICAgIHJldHVybiBhd2FpdCBwb3N0SW5zdGFsbFB5dGhvbih3b3JrRGlyKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwb3N0SW5zdGFsbEphdmFzY3JpcHQoY2FuVXNlTmV0d29yazogYm9vbGVhbiwgY3dkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHBvc3RJbnN0YWxsVHlwZXNjcmlwdChjYW5Vc2VOZXR3b3JrLCBjd2QpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwb3N0SW5zdGFsbFR5cGVzY3JpcHQoY2FuVXNlTmV0d29yazogYm9vbGVhbiwgY3dkOiBzdHJpbmcpIHtcbiAgY29uc3QgY29tbWFuZCA9ICducG0nO1xuXG4gIGlmICghY2FuVXNlTmV0d29yaykge1xuICAgIHdhcm5pbmcoYFBsZWFzZSBydW4gJyR7Y29tbWFuZH0gaW5zdGFsbCchYCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpbnQoYEV4ZWN1dGluZyAke2NvbG9ycy5ncmVlbihgJHtjb21tYW5kfSBpbnN0YWxsYCl9Li4uYCk7XG4gIHRyeSB7XG4gICAgYXdhaXQgZXhlY3V0ZShjb21tYW5kLCBbJ2luc3RhbGwnXSwgeyBjd2QgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3YXJuaW5nKGAke2NvbW1hbmR9IGluc3RhbGwgZmFpbGVkOiBgICsgZS5tZXNzYWdlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwb3N0SW5zdGFsbEphdmEoY2FuVXNlTmV0d29yazogYm9vbGVhbiwgY3dkOiBzdHJpbmcpIHtcbiAgY29uc3QgbXZuUGFja2FnZVdhcm5pbmcgPSBcIlBsZWFzZSBydW4gJ212biBwYWNrYWdlJyFcIjtcbiAgaWYgKCFjYW5Vc2VOZXR3b3JrKSB7XG4gICAgd2FybmluZyhtdm5QYWNrYWdlV2FybmluZyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpbnQoXCJFeGVjdXRpbmcgJ212biBwYWNrYWdlJ1wiKTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBleGVjdXRlKCdtdm4nLCBbJ3BhY2thZ2UnXSwgeyBjd2QgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3YXJuaW5nKCdVbmFibGUgdG8gcGFja2FnZSBjb21waWxlZCBjb2RlIGFzIEpBUicpO1xuICAgIHdhcm5pbmcobXZuUGFja2FnZVdhcm5pbmcpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RJbnN0YWxsUHl0aG9uKGN3ZDogc3RyaW5nKSB7XG4gIGNvbnN0IHB5dGhvbiA9IHB5dGhvbkV4ZWN1dGFibGUoKTtcbiAgd2FybmluZyhgUGxlYXNlIHJ1biAke3B5dGhvbn0gLW0gdmVudiAuZW52JyFgKTtcbiAgcHJpbnQoYEV4ZWN1dGluZyAke2NvbG9ycy5ncmVlbignQ3JlYXRpbmcgdmlydHVhbGVudi4uLicpfWApO1xuICB0cnkge1xuICAgIGF3YWl0IGV4ZWN1dGUocHl0aG9uLCBbJy1tIHZlbnYnLCAnLmVudiddLCB7IGN3ZCB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHdhcm5pbmcoJ1VuYWJsZSB0byBjcmVhdGUgdmlydHVhbGVudiBhdXRvbWF0aWNhbGx5Jyk7XG4gICAgd2FybmluZyhgUGxlYXNlIHJ1biAnJHtweXRob259IC1tIHZlbnYgLmVudichYCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gZGlyIGEgZGlyZWN0b3J5IHRvIGJlIGNoZWNrZWRcbiAqIEByZXR1cm5zIHRydWUgaWYgYGBkaXJgYCBpcyB3aXRoaW4gYSBnaXQgcmVwb3NpdG9yeS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaXNJbkdpdFJlcG9zaXRvcnkoZGlyOiBzdHJpbmcpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAoYXdhaXQgZnMucGF0aEV4aXN0cyhwYXRoLmpvaW4oZGlyLCAnLmdpdCcpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChpc1Jvb3QoZGlyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBkaXIgPSBwYXRoLmRpcm5hbWUoZGlyKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSBkaXIgYSBkaXJlY3RvcnkgdG8gYmUgY2hlY2tlZC5cbiAqIEByZXR1cm5zIHRydWUgaWYgYGBkaXJgYCBpcyB0aGUgcm9vdCBvZiBhIGZpbGVzeXN0ZW0uXG4gKi9cbmZ1bmN0aW9uIGlzUm9vdChkaXI6IHN0cmluZykge1xuICByZXR1cm4gcGF0aC5kaXJuYW1lKGRpcikgPT09IGRpcjtcbn1cblxuLyoqXG4gKiBFeGVjdXRlcyBgY29tbWFuZGAuIFNUREVSUiBpcyBlbWl0dGVkIGluIHJlYWwtdGltZS5cbiAqXG4gKiBJZiBjb21tYW5kIGV4aXRzIHdpdGggbm9uLXplcm8gZXhpdCBjb2RlLCBhbiBleGNlcHJpb24gaXMgdGhyb3duIGFuZCBpbmNsdWRlc1xuICogdGhlIGNvbnRlbnRzIG9mIFNURE9VVC5cbiAqXG4gKiBAcmV0dXJucyBTVERPVVQgKGlmIHN1Y2Nlc3NmdWwpLlxuICovXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlKGNtZDogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSwgeyBjd2QgfTogeyBjd2Q6IHN0cmluZyB9KSB7XG4gIGNvbnN0IGNoaWxkID0gY2hpbGRQcm9jZXNzLnNwYXduKGNtZCwgYXJncywgeyBjd2QsIHNoZWxsOiB0cnVlLCBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpbmhlcml0J10gfSk7XG4gIGxldCBzdGRvdXQgPSAnJztcbiAgY2hpbGQuc3Rkb3V0Lm9uKCdkYXRhJywgKGNodW5rKSA9PiAoc3Rkb3V0ICs9IGNodW5rLnRvU3RyaW5nKCkpKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKG9rLCBmYWlsKSA9PiB7XG4gICAgY2hpbGQub25jZSgnZXJyb3InLCAoZXJyKSA9PiBmYWlsKGVycikpO1xuICAgIGNoaWxkLm9uY2UoJ2V4aXQnLCAoc3RhdHVzKSA9PiB7XG4gICAgICBpZiAoc3RhdHVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvayhzdGRvdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoc3Rkb3V0KTtcbiAgICAgICAgcmV0dXJuIGZhaWwobmV3IEVycm9yKGAke2NtZH0gZXhpdGVkIHdpdGggc3RhdHVzICR7c3RhdHVzfWApKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iXX0=