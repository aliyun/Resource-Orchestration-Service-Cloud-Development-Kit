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
        const cdkVersion = require('../package.json').version.replace(MATCH_VER_BUILD, '');
        return template
            .replace(/%name%/g, project.name)
            .replace(/%name\.camelCased%/g, camelCase(project.name))
            .replace(/%name\.PascalCased%/g, camelCase(project.name, { pascalCase: true }))
            .replace(/%cdk-version%/g, cdkVersion)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQWlEO0FBQ2pELDhDQUE4QztBQUM5QyxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qix1Q0FBa0Q7QUFDbEQsb0RBQWdEO0FBSWhELHNGQUFzRjtBQUN0RixpRUFBaUU7QUFDakUsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZDLGlFQUFpRTtBQUNqRSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsZ0NBQWdDO0FBRWhDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFN0Q7O0dBRUc7QUFDSSxLQUFLLFVBQVUsT0FBTyxDQUMzQixPQUFnQixFQUNoQixRQUFpQixFQUNqQixhQUFhLEdBQUcsSUFBSSxFQUNwQixZQUFZLEdBQUcsS0FBSyxFQUNwQixPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRTtJQUV2QixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ3pCLE1BQU0sdUJBQXVCLEVBQUUsQ0FBQztRQUNoQyxPQUFPO0tBQ1I7SUFFRCxPQUFPLEdBQUcsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLHVEQUF1RDtJQUV2RixNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sOEJBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBUSxDQUFDLENBQUMsQ0FBQztJQUNqRixJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2IsTUFBTSx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixPQUFPLEVBQUUsQ0FBQyxDQUFD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QUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hHLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakUsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM1QixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsdUJBQXVCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMvRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hhcGkgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY3hhcGknO1xuaW1wb3J0ICogYXMgY2hpbGRQcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBlcnJvciwgcHJpbnQsIHdhcm5pbmcgfSBmcm9tICcuL2xvZ2dpbmcnO1xuaW1wb3J0IHsgY2RrSG9tZURpciB9IGZyb20gJy4vdXRpbC9kaXJlY3Rvcmllcyc7XG5cbmV4cG9ydCB0eXBlIEludm9rZUhvb2sgPSAodGFyZ2V0RGlyZWN0b3J5OiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5cbi8vIHRzbGludDpkaXNhYmxlOm5vLXZhci1yZXF1aXJlcyB0aG9zZSBsaWJyYXJpZXMgZG9uJ3QgaGF2ZSB1cC10by1kYXRlIEB0eXBlcyBtb2R1bGVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuY29uc3QgY2FtZWxDYXNlID0gcmVxdWlyZSgnY2FtZWxjYXNlJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuY29uc3QgZGVjYW1lbGl6ZSA9IHJlcXVpcmUoJ2RlY2FtZWxpemUnKTtcbi8vIHRzbGludDplbmFibGU6bm8tdmFyLXJlcXVpcmVzXG5cbmNvbnN0IFRFTVBMQVRFU19ESVIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnaW5pdC10ZW1wbGF0ZXMnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgQ0RLIHBhY2thZ2UgaW4gdGhlIGN1cnJlbnQgZGlyZWN0b3J5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGlJbml0KFxuICBhcHBOYW1lPzogc3RyaW5nLFxuICBsYW5ndWFnZT86IHN0cmluZyxcbiAgY2FuVXNlTmV0d29yayA9IHRydWUsXG4gIGdlbmVyYXRlT25seSA9IGZhbHNlLFxuICB3b3JrRGlyID0gcHJvY2Vzcy5jd2QoKSxcbikge1xuICBpZiAoIWFwcE5hbWUgJiYgIWxhbmd1YWdlKSB7XG4gICAgYXdhaXQgcHJpbnRBdmFpbGFibGVUZW1wbGF0ZXMoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBhcHBOYW1lID0gYXBwTmFtZSB8fCAnZGVmYXVsdCc7IC8vIFwiZGVmYXVsdFwiIGlzIHRoZSBkZWZhdWx0IGFwcE5hbWUgKGFuZCBtYXBzIHRvIFwiYXBwXCIpXG5cbiAgY29uc3QgdGVtcGxhdGUgPSAoYXdhaXQgYXZhaWxhYmxlSW5pdFRlbXBsYXRlcykuZmluZCgodCkgPT4gdC5oYXNOYW1lKGFwcE5hbWUhKSk7XG4gIGlmICghdGVtcGxhdGUpIHtcbiAgICBhd2FpdCBwcmludEF2YWlsYWJsZVRlbXBsYXRlcyhsYW5ndWFnZSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGluaXQgdGVtcGxhdGU6ICR7YXBwTmFtZX1gKTtcbiAgfVxuICBpZiAoIWxhbmd1YWdlICYmIHRlbXBsYXRlLmxhbmd1YWdlcy5sZW5ndGggPT09IDEpIHtcbiAgICBsYW5ndWFnZSA9IHRlbXBsYXRlLmxhbmd1YWdlc1swXTtcbiAgICB3YXJuaW5nKFxuICAgICAgYE5vIC0tbGFuZ3VhZ2Ugd2FzIHByb3ZpZGVkLCBidXQgJyR7YXBwTmFtZX0nIHN1cHBvcnRzIG9ubHkgJyR7bGFuZ3VhZ2V9Jywgc28gZGVmYXVsdGluZyB0byAtLWxhbmd1YWdlPSR7bGFuZ3VhZ2V9YCxcbiAgICApO1xuICB9XG4gIGlmICghbGFuZ3VhZ2UpIHtcbiAgICBwcmludChcbiAgICAgIGBBdmFpbGFibGUgbGFuZ3VhZ2VzIGZvciAke2NvbG9ycy5ncmVlbihhcHBOYW1lKX06ICR7dGVtcGxhdGUubGFuZ3VhZ2VzLm1hcCgobCkgPT4gY29sb3JzLmJsdWUobCkpLmpvaW4oJywgJyl9YCxcbiAgICApO1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbGFuZ3VhZ2Ugd2FzIHNlbGVjdGVkJyk7XG4gIH1cblxuICBhd2FpdCBpbml0aWFsaXplUHJvamVjdCh0ZW1wbGF0ZSwgbGFuZ3VhZ2UsIGNhblVzZU5ldHdvcmssIGdlbmVyYXRlT25seSwgd29ya0Rpcik7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgUHl0aG9uIGV4ZWN1dGFibGUgZm9yIHRoaXMgT1NcbiAqL1xuZnVuY3Rpb24gcHl0aG9uRXhlY3V0YWJsZSgpIHtcbiAgbGV0IHB5dGhvbiA9ICdweXRob24zJztcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICBweXRob24gPSAncHl0aG9uJztcbiAgfVxuICByZXR1cm4gcHl0aG9uO1xufVxuY29uc3QgSU5GT19ET1RfSlNPTiA9ICdpbmZvLmpzb24nO1xuXG5leHBvcnQgY2xhc3MgSW5pdFRlbXBsYXRlIHtcbiAgcHVibGljIHN0YXRpYyBhc3luYyBmcm9tTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBiYXNlUGF0aCA9IHBhdGguam9pbihURU1QTEFURVNfRElSLCBuYW1lKTtcbiAgICBjb25zdCBsYW5ndWFnZXMgPSAoYXdhaXQgbGlzdERpcmVjdG9yeShiYXNlUGF0aCkpLmZpbHRlcigoZikgPT4gZiAhPT0gSU5GT19ET1RfSlNPTik7XG4gICAgY29uc3QgaW5mbyA9IGF3YWl0IGZzLnJlYWRKc29uKHBhdGguam9pbihiYXNlUGF0aCwgSU5GT19ET1RfSlNPTikpO1xuICAgIHJldHVybiBuZXcgSW5pdFRlbXBsYXRlKGJhc2VQYXRoLCBuYW1lLCBsYW5ndWFnZXMsIGluZm8pO1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkb25seSBhbGlhc2VzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBiYXNlUGF0aDogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IGxhbmd1YWdlczogc3RyaW5nW10sXG4gICAgaW5mbzogYW55LFxuICApIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gaW5mby5kZXNjcmlwdGlvbjtcbiAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIGluZm8uYWxpYXNlcyB8fCBbXSkge1xuICAgICAgdGhpcy5hbGlhc2VzLmFkZChhbGlhcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIHRoYXQgaXMgYmVpbmcgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBgYHRydWVgYCBpZiBgYG5hbWVgYCBpcyB0aGUgbmFtZSBvZiB0aGlzIHRlbXBsYXRlIG9yIGFuIGFsaWFzIG9mIGl0LlxuICAgKi9cbiAgcHVibGljIGhhc05hbWUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG5hbWUgPT09IHRoaXMubmFtZSB8fCB0aGlzLmFsaWFzZXMuaGFzKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBgYEluaXRUZW1wbGF0ZWBgIGZvciBhIGdpdmVuIGxhbmd1YWdlIHRvIGEgc3BlY2lmaWVkIGZvbGRlci5cbiAgICpcbiAgICogQHBhcmFtIGxhbmd1YWdlICAgIHRoZSBsYW5ndWFnZSB0byBpbnN0YW50aWF0ZSB0aGlzIHRlbXBsYXRlIHdpdGhcbiAgICogQHBhcmFtIHRhcmdldERpcmVjdG9yeSB0aGUgZGlyZWN0b3J5IHdoZXJlIHRoZSB0ZW1wbGF0ZSBpcyB0byBiZSBpbnN0YW50aWF0ZWQgaW50b1xuICAgKi9cbiAgcHVibGljIGFzeW5jIGluc3RhbGwobGFuZ3VhZ2U6IHN0cmluZywgdGFyZ2V0RGlyZWN0b3J5OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5sYW5ndWFnZXMuaW5kZXhPZihsYW5ndWFnZSkgPT09IC0xKSB7XG4gICAgICBlcnJvcihcbiAgICAgICAgYFRoZSAke2NvbG9ycy5ibHVlKGxhbmd1YWdlKX0gbGFuZ3VhZ2UgaXMgbm90IHN1cHBvcnRlZCBmb3IgJHtjb2xvcnMuZ3JlZW4odGhpcy5uYW1lKX0gYCArXG4gICAgICAgICAgYChpdCBzdXBwb3J0czogJHt0aGlzLmxhbmd1YWdlcy5tYXAoKGwpID0+IGNvbG9ycy5ibHVlKGwpKS5qb2luKCcsICcpfSlgLFxuICAgICAgKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgbGFuZ3VhZ2U6ICR7bGFuZ3VhZ2V9YCk7XG4gICAgfVxuICAgIGNvbnN0IHNvdXJjZURpcmVjdG9yeSA9IHBhdGguam9pbih0aGlzLmJhc2VQYXRoLCBsYW5ndWFnZSk7XG4gICAgY29uc3QgaG9va1RlbXBEaXJlY3RvcnkgPSBwYXRoLmpvaW4odGFyZ2V0RGlyZWN0b3J5LCAndG1wJyk7XG4gICAgYXdhaXQgZnMubWtkaXIoaG9va1RlbXBEaXJlY3RvcnkpO1xuICAgIGF3YWl0IHRoaXMuaW5zdGFsbEZpbGVzKHNvdXJjZURpcmVjdG9yeSwgdGFyZ2V0RGlyZWN0b3J5LCB7XG4gICAgICBuYW1lOiBkZWNhbWVsaXplKHBhdGguYmFzZW5hbWUocGF0aC5yZXNvbHZlKHRhcmdldERpcmVjdG9yeSkpKSxcbiAgICB9KTtcbiAgICBhd2FpdCB0aGlzLmFwcGx5RnV0dXJlRmxhZ3ModGFyZ2V0RGlyZWN0b3J5KTtcbiAgICBhd2FpdCB0aGlzLmludm9rZUhvb2tzKGhvb2tUZW1wRGlyZWN0b3J5LCB0YXJnZXREaXJlY3RvcnkpO1xuICAgIGF3YWl0IGZzLnJlbW92ZShob29rVGVtcERpcmVjdG9yeSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluc3RhbGxGaWxlcyhzb3VyY2VEaXJlY3Rvcnk6IHN0cmluZywgdGFyZ2V0RGlyZWN0b3J5OiBzdHJpbmcsIHByb2plY3Q6IFByb2plY3RJbmZvKSB7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGF3YWl0IGZzLnJlYWRkaXIoc291cmNlRGlyZWN0b3J5KSkge1xuICAgICAgY29uc3QgZnJvbUZpbGUgPSBwYXRoLmpvaW4oc291cmNlRGlyZWN0b3J5LCBmaWxlKTtcbiAgICAgIGNvbnN0IHRvRmlsZSA9IHBhdGguam9pbih0YXJnZXREaXJlY3RvcnksIHRoaXMuZXhwYW5kKHVuZXNjYXBlKGZpbGUpLCBwcm9qZWN0KSk7XG4gICAgICBpZiAoKGF3YWl0IGZzLnN0YXQoZnJvbUZpbGUpKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRvRmlsZSk7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5zdGFsbEZpbGVzKGZyb21GaWxlLCB0b0ZpbGUsIHByb2plY3QpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsZS5tYXRjaCgvXi4qXFwudGVtcGxhdGVcXC5bXi5dKyQvKSkge1xuICAgICAgICBhd2FpdCB0aGlzLmluc3RhbGxQcm9jZXNzZWQoZnJvbUZpbGUsIHRvRmlsZS5yZXBsYWNlKC9cXC50ZW1wbGF0ZShcXC5bXi5dKykkLywgJyQxJyksIHByb2plY3QpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsZS5tYXRjaCgvXi4qXFwuaG9va1xcLihkLik/W14uXSskLykpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5pbnN0YWxsUHJvY2Vzc2VkKGZyb21GaWxlLCBwYXRoLmpvaW4odGFyZ2V0RGlyZWN0b3J5LCAndG1wJywgZmlsZSksIHByb2plY3QpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsZS5lbmRzV2l0aCgnLnRlbXBsYXRlJykpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5pbnN0YWxsUHJvY2Vzc2VkKGZyb21GaWxlLCB0b0ZpbGUuc3Vic3RyaW5nKDAsIHRvRmlsZS5sZW5ndGggLSA5KSwgcHJvamVjdCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgZnMuY29weShmcm9tRmlsZSwgdG9GaWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgICBJbnZva2UgYW55IGphdmFzY3JpcHQgaG9va3MgdGhhdCBleGlzdCBpbiB0aGUgdGVtcGxhdGUuXG4gICAqIEBkZXNjcmlwdGlvbiBTb21ldGltZXMgdGVtcGxhdGVzIG5lZWQgbW9yZSBjb21wbGV4IGxvZ2ljIHRoYW4ganVzdCByZXBsYWNpbmcgdG9rZW5zLiBBICdob29rJyBpc1xuICAgKiAgICAgICAgYW55IGZpbGUgdGhhdCBlbmRzIGluIC5ob29rLmpzLiBJdCBzaG91bGQgZXhwb3J0IGEgc2luZ2xlIGZ1bmN0aW9uIGNhbGxlZCBcImludm9rZVwiXG4gICAqICAgICAgICB0aGF0IGFjY2VwdHMgYSBzaW5nbGUgc3RyaW5nIHBhcmFtZXRlci4gV2hlbiB0aGUgdGVtcGxhdGUgaXMgaW5zdGFsbGVkLCBlYWNoIGhvb2tcbiAgICogICAgICAgIHdpbGwgYmUgaW52b2tlZCwgcGFzc2luZyB0aGUgdGFyZ2V0IGRpcmVjdG9yeSBhcyB0aGUgb25seSBhcmd1bWVudC4gSG9va3MgYXJlIGludm9rZWRcbiAgICogICAgICAgIGluIGxleGljYWwgb3JkZXIuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGludm9rZUhvb2tzKHNvdXJjZURpcmVjdG9yeTogc3RyaW5nLCB0YXJnZXREaXJlY3Rvcnk6IHN0cmluZykge1xuICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgZnMucmVhZGRpcihzb3VyY2VEaXJlY3RvcnkpO1xuICAgIGZpbGVzLnNvcnQoKTsgLy8gU29ydGluZyBhbGxvd3MgdGVtcGxhdGUgYXV0aG9ycyB0byBjb250cm9sIHRoZSBvcmRlciBpbiB3aGljaCBob29rcyBhcmUgaW52b2tlZC5cblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgaWYgKGZpbGUubWF0Y2goL14uKlxcLmhvb2tcXC5qcyQvKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuICAgICAgICBjb25zdCBpbnZva2U6IEludm9rZUhvb2sgPSByZXF1aXJlKHBhdGguam9pbihzb3VyY2VEaXJlY3RvcnksIGZpbGUpKS5pbnZva2U7XG4gICAgICAgIGF3YWl0IGludm9rZSh0YXJnZXREaXJlY3RvcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaW5zdGFsbFByb2Nlc3NlZCh0ZW1wbGF0ZVBhdGg6IHN0cmluZywgdG9GaWxlOiBzdHJpbmcsIHByb2plY3Q6IFByb2plY3RJbmZvKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBmcy5yZWFkRmlsZSh0ZW1wbGF0ZVBhdGgsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSk7XG4gICAgYXdhaXQgZnMud3JpdGVGaWxlKHRvRmlsZSwgdGhpcy5leHBhbmQodGVtcGxhdGUsIHByb2plY3QpKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhwYW5kKHRlbXBsYXRlOiBzdHJpbmcsIHByb2plY3Q6IFByb2plY3RJbmZvKSB7XG4gICAgY29uc3QgTUFUQ0hfVkVSX0JVSUxEID0gL1xcK1thLWYwLTldKyQvOyAvLyBNYXRjaGVzIFwiK0JVSUxEXCIgaW4gXCJ4Lnkuei1iZXRhK0JVSUxEXCJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuICAgIGNvbnN0IGNka1ZlcnNpb24gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uLnJlcGxhY2UoTUFUQ0hfVkVSX0JVSUxELCAnJyk7XG4gICAgcmV0dXJuIHRlbXBsYXRlXG4gICAgICAucmVwbGFjZSgvJW5hbWUlL2csIHByb2plY3QubmFtZSlcbiAgICAgIC5yZXBsYWNlKC8lbmFtZVxcLmNhbWVsQ2FzZWQlL2csIGNhbWVsQ2FzZShwcm9qZWN0Lm5hbWUpKVxuICAgICAgLnJlcGxhY2UoLyVuYW1lXFwuUGFzY2FsQ2FzZWQlL2csIGNhbWVsQ2FzZShwcm9qZWN0Lm5hbWUsIHsgcGFzY2FsQ2FzZTogdHJ1ZSB9KSlcbiAgICAgIC5yZXBsYWNlKC8lY2RrLXZlcnNpb24lL2csIGNka1ZlcnNpb24pXG4gICAgICAucmVwbGFjZSgvJWNkay1ob21lJS9nLCBjZGtIb21lRGlyKCkpXG4gICAgICAucmVwbGFjZSgvJW5hbWVcXC5QeXRob25Nb2R1bGUlL2csIHByb2plY3QubmFtZS5yZXBsYWNlKC8tL2csICdfJykpXG4gICAgICAucmVwbGFjZSgvJXB5dGhvbi1leGVjdXRhYmxlJS9nLCBweXRob25FeGVjdXRhYmxlKCkpXG4gICAgICAucmVwbGFjZSgvJW5hbWVcXC5TdGFja05hbWUlL2csIHByb2plY3QubmFtZS5yZXBsYWNlKC9bXkEtWmEtejAtOS1dL2csICctJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY29udGV4dCB2YXJpYWJsZXMgdG8gYGNkay5qc29uYCBpbiB0aGUgZ2VuZXJhdGVkIHByb2plY3QgZGlyZWN0b3J5IHRvXG4gICAqIGVuYWJsZSBmdXR1cmUgYmVoYXZpb3IgZm9yIG5ldyBwcm9qZWN0cy5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgYXBwbHlGdXR1cmVGbGFncyhwcm9qZWN0RGlyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjZGtKc29uID0gcGF0aC5qb2luKHByb2plY3REaXIsICdjZGsuanNvbicpO1xuICAgIGlmICghKGF3YWl0IGZzLnBhdGhFeGlzdHMoY2RrSnNvbikpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgZnMucmVhZEpzb24oY2RrSnNvbik7XG4gICAgY29uZmlnLmNvbnRleHQgPSB7XG4gICAgICAuLi5jb25maWcuY29udGV4dCxcbiAgICAgIC4uLmN4YXBpLkZVVFVSRV9GTEFHUyxcbiAgICB9O1xuXG4gICAgYXdhaXQgZnMud3JpdGVKc29uKGNka0pzb24sIGNvbmZpZywgeyBzcGFjZXM6IDIgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFByb2plY3RJbmZvIHtcbiAgLyoqIFRoZSB2YWx1ZSB1c2VkIGZvciAlbmFtZSUgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgYXZhaWxhYmxlSW5pdFRlbXBsYXRlczogUHJvbWlzZTxJbml0VGVtcGxhdGVbXT4gPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZU5hbWVzID0gYXdhaXQgbGlzdERpcmVjdG9yeShURU1QTEFURVNfRElSKTtcbiAgY29uc3QgdGVtcGxhdGVzID0gbmV3IEFycmF5PEluaXRUZW1wbGF0ZT4oKTtcbiAgZm9yIChjb25zdCB0ZW1wbGF0ZU5hbWUgb2YgdGVtcGxhdGVOYW1lcykge1xuICAgIHRlbXBsYXRlcy5wdXNoKGF3YWl0IEluaXRUZW1wbGF0ZS5mcm9tTmFtZSh0ZW1wbGF0ZU5hbWUpKTtcbiAgfVxuICByZXNvbHZlKHRlbXBsYXRlcyk7XG59KTtcbmV4cG9ydCBjb25zdCBhdmFpbGFibGVJbml0TGFuZ3VhZ2VzOiBQcm9taXNlPHN0cmluZ1tdPiA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlcyA9IGF3YWl0IGF2YWlsYWJsZUluaXRUZW1wbGF0ZXM7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRlbXBsYXRlcykge1xuICAgIGZvciAoY29uc3QgbGFuZ3VhZ2Ugb2YgdGVtcGxhdGUubGFuZ3VhZ2VzKSB7XG4gICAgICByZXN1bHQuYWRkKGxhbmd1YWdlKTtcbiAgICB9XG4gIH1cbiAgcmVzb2x2ZShbLi4ucmVzdWx0XSk7XG59KTtcbi8qKlxuICogQHBhcmFtIGRpclBhdGggaXMgdGhlIGRpcmVjdG9yeSB0byBiZSBsaXN0ZWQuXG4gKiBAcmV0dXJucyB0aGUgbGlzdCBvZiBmaWxlIG9yIGRpcmVjdG9yeSBuYW1lcyBjb250YWluZWQgaW4gYGBkaXJQYXRoYGAsIGV4Y2x1ZGluZyBhbnkgZG90LWZpbGUsIGFuZCBzb3J0ZWQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxpc3REaXJlY3RvcnkoZGlyUGF0aDogc3RyaW5nKSB7XG4gIHJldHVybiAoYXdhaXQgZnMucmVhZGRpcihkaXJQYXRoKSkuZmlsdGVyKChwKSA9PiAhcC5zdGFydHNXaXRoKCcuJykpLnNvcnQoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByaW50QXZhaWxhYmxlVGVtcGxhdGVzKGxhbmd1YWdlPzogc3RyaW5nKSB7XG4gIHByaW50KCdBdmFpbGFibGUgdGVtcGxhdGVzOicpO1xuICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIGF3YWl0IGF2YWlsYWJsZUluaXRUZW1wbGF0ZXMpIHtcbiAgICBpZiAobGFuZ3VhZ2UgJiYgdGVtcGxhdGUubGFuZ3VhZ2VzLmluZGV4T2YobGFuZ3VhZ2UpID09PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHByaW50KGAqICR7Y29sb3JzLmdyZWVuKHRlbXBsYXRlLm5hbWUpfTogJHt0ZW1wbGF0ZS5kZXNjcmlwdGlvbn1gKTtcbiAgICBjb25zdCBsYW5ndWFnZUFyZyA9IGxhbmd1YWdlXG4gICAgICA/IGNvbG9ycy5ib2xkKGxhbmd1YWdlKVxuICAgICAgOiB0ZW1wbGF0ZS5sYW5ndWFnZXMubGVuZ3RoID4gMVxuICAgICAgPyBgWyR7dGVtcGxhdGUubGFuZ3VhZ2VzLm1hcCgodCkgPT4gY29sb3JzLmJvbGQodCkpLmpvaW4oJ3wnKX1dYFxuICAgICAgOiBjb2xvcnMuYm9sZCh0ZW1wbGF0ZS5sYW5ndWFnZXNbMF0pO1xuICAgIHByaW50KGAgICDilJTilIAgJHtjb2xvcnMuYmx1ZShgY2RrIGluaXQgJHtjb2xvcnMuYm9sZCh0ZW1wbGF0ZS5uYW1lKX0gLS1sYW5ndWFnZT0ke2xhbmd1YWdlQXJnfWApfWApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVQcm9qZWN0KFxuICB0ZW1wbGF0ZTogSW5pdFRlbXBsYXRlLFxuICBsYW5ndWFnZTogc3RyaW5nLFxuICBjYW5Vc2VOZXR3b3JrOiBib29sZWFuLFxuICBnZW5lcmF0ZU9ubHk6IGJvb2xlYW4sXG4gIHdvcmtEaXI6IHN0cmluZyxcbikge1xuICBhd2FpdCBhc3NlcnRJc0VtcHR5RGlyZWN0b3J5KHdvcmtEaXIpO1xuXG4gIHByaW50KGBBcHBseWluZyBwcm9qZWN0IHRlbXBsYXRlICR7Y29sb3JzLmdyZWVuKHRlbXBsYXRlLm5hbWUpfSBmb3IgJHtjb2xvcnMuYmx1ZShsYW5ndWFnZSl9YCk7XG4gIGF3YWl0IHRlbXBsYXRlLmluc3RhbGwobGFuZ3VhZ2UsIHdvcmtEaXIpO1xuICBpZiAoYXdhaXQgZnMucGF0aEV4aXN0cygnUkVBRE1FLm1kJykpIHtcbiAgICBwcmludChjb2xvcnMuZ3JlZW4oYXdhaXQgZnMucmVhZEZpbGUoJ1JFQURNRS5tZCcsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSkpKTtcbiAgfVxuXG4gIGlmICghZ2VuZXJhdGVPbmx5KSB7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZUdpdFJlcG9zaXRvcnkod29ya0Rpcik7XG4gICAgYXdhaXQgcG9zdEluc3RhbGwobGFuZ3VhZ2UsIGNhblVzZU5ldHdvcmssIHdvcmtEaXIpO1xuICB9XG5cbiAgcHJpbnQoJ+KchSBBbGwgZG9uZSEnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXNzZXJ0SXNFbXB0eURpcmVjdG9yeSh3b3JrRGlyOiBzdHJpbmcpIHtcbiAgY29uc3QgZmlsZXMgPSBhd2FpdCBmcy5yZWFkZGlyKHdvcmtEaXIpO1xuICBpZiAoZmlsZXMuZmlsdGVyKChmKSA9PiAhZi5zdGFydHNXaXRoKCcuJykpLmxlbmd0aCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYHJvcyBpbml0YCBjYW5ub3QgYmUgcnVuIGluIGEgbm9uLWVtcHR5IGRpcmVjdG9yeSEnKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplR2l0UmVwb3NpdG9yeSh3b3JrRGlyOiBzdHJpbmcpIHtcbiAgaWYgKGF3YWl0IGlzSW5HaXRSZXBvc2l0b3J5KHdvcmtEaXIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHByaW50KCdJbml0aWFsaXppbmcgYSBuZXcgZ2l0IHJlcG9zaXRvcnkuLi4nKTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBleGVjdXRlKCdnaXQnLCBbJ2luaXQnXSwgeyBjd2Q6IHdvcmtEaXIgfSk7XG4gICAgYXdhaXQgZXhlY3V0ZSgnZ2l0JywgWydhZGQnLCAnLiddLCB7IGN3ZDogd29ya0RpciB9KTtcbiAgICBhd2FpdCBleGVjdXRlKCdnaXQnLCBbJ2NvbW1pdCcsICctLW1lc3NhZ2U9XCJJbml0aWFsIGNvbW1pdFwiJywgJy0tbm8tZ3BnLXNpZ24nXSwgeyBjd2Q6IHdvcmtEaXIgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3YXJuaW5nKCdVbmFibGUgdG8gaW5pdGlhbGl6ZSBnaXQgcmVwb3NpdG9yeSBmb3IgeW91ciBwcm9qZWN0LicpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RJbnN0YWxsKGxhbmd1YWdlOiBzdHJpbmcsIGNhblVzZU5ldHdvcms6IGJvb2xlYW4sIHdvcmtEaXI6IHN0cmluZykge1xuICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgY2FzZSAnamF2YXNjcmlwdCc6XG4gICAgICByZXR1cm4gYXdhaXQgcG9zdEluc3RhbGxKYXZhc2NyaXB0KGNhblVzZU5ldHdvcmssIHdvcmtEaXIpO1xuICAgIGNhc2UgJ3R5cGVzY3JpcHQnOlxuICAgICAgcmV0dXJuIGF3YWl0IHBvc3RJbnN0YWxsVHlwZXNjcmlwdChjYW5Vc2VOZXR3b3JrLCB3b3JrRGlyKTtcbiAgICBjYXNlICdqYXZhJzpcbiAgICAgIHJldHVybiBhd2FpdCBwb3N0SW5zdGFsbEphdmEoY2FuVXNlTmV0d29yaywgd29ya0Rpcik7XG4gICAgY2FzZSAncHl0aG9uJzpcbiAgICAgIHJldHVybiBhd2FpdCBwb3N0SW5zdGFsbFB5dGhvbih3b3JrRGlyKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwb3N0SW5zdGFsbEphdmFzY3JpcHQoY2FuVXNlTmV0d29yazogYm9vbGVhbiwgY3dkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHBvc3RJbnN0YWxsVHlwZXNjcmlwdChjYW5Vc2VOZXR3b3JrLCBjd2QpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwb3N0SW5zdGFsbFR5cGVzY3JpcHQoY2FuVXNlTmV0d29yazogYm9vbGVhbiwgY3dkOiBzdHJpbmcpIHtcbiAgY29uc3QgY29tbWFuZCA9ICducG0nO1xuXG4gIGlmICghY2FuVXNlTmV0d29yaykge1xuICAgIHdhcm5pbmcoYFBsZWFzZSBydW4gJyR7Y29tbWFuZH0gaW5zdGFsbCchYCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpbnQoYEV4ZWN1dGluZyAke2NvbG9ycy5ncmVlbihgJHtjb21tYW5kfSBpbnN0YWxsYCl9Li4uYCk7XG4gIHRyeSB7XG4gICAgYXdhaXQgZXhlY3V0ZShjb21tYW5kLCBbJ2luc3RhbGwnXSwgeyBjd2QgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3YXJuaW5nKGAke2NvbW1hbmR9IGluc3RhbGwgZmFpbGVkOiBgICsgZS5tZXNzYWdlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwb3N0SW5zdGFsbEphdmEoY2FuVXNlTmV0d29yazogYm9vbGVhbiwgY3dkOiBzdHJpbmcpIHtcbiAgY29uc3QgbXZuUGFja2FnZVdhcm5pbmcgPSBcIlBsZWFzZSBydW4gJ212biBwYWNrYWdlJyFcIjtcbiAgaWYgKCFjYW5Vc2VOZXR3b3JrKSB7XG4gICAgd2FybmluZyhtdm5QYWNrYWdlV2FybmluZyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpbnQoXCJFeGVjdXRpbmcgJ212biBwYWNrYWdlJ1wiKTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBleGVjdXRlKCdtdm4nLCBbJ3BhY2thZ2UnXSwgeyBjd2QgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3YXJuaW5nKCdVbmFibGUgdG8gcGFja2FnZSBjb21waWxlZCBjb2RlIGFzIEpBUicpO1xuICAgIHdhcm5pbmcobXZuUGFja2FnZVdhcm5pbmcpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RJbnN0YWxsUHl0aG9uKGN3ZDogc3RyaW5nKSB7XG4gIGNvbnN0IHB5dGhvbiA9IHB5dGhvbkV4ZWN1dGFibGUoKTtcbiAgd2FybmluZyhgUGxlYXNlIHJ1biAke3B5dGhvbn0gLW0gdmVudiAuZW52JyFgKTtcbiAgcHJpbnQoYEV4ZWN1dGluZyAke2NvbG9ycy5ncmVlbignQ3JlYXRpbmcgdmlydHVhbGVudi4uLicpfWApO1xuICB0cnkge1xuICAgIGF3YWl0IGV4ZWN1dGUocHl0aG9uLCBbJy1tIHZlbnYnLCAnLmVudiddLCB7IGN3ZCB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHdhcm5pbmcoJ1VuYWJsZSB0byBjcmVhdGUgdmlydHVhbGVudiBhdXRvbWF0aWNhbGx5Jyk7XG4gICAgd2FybmluZyhgUGxlYXNlIHJ1biAnJHtweXRob259IC1tIHZlbnYgLmVudichYCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gZGlyIGEgZGlyZWN0b3J5IHRvIGJlIGNoZWNrZWRcbiAqIEByZXR1cm5zIHRydWUgaWYgYGBkaXJgYCBpcyB3aXRoaW4gYSBnaXQgcmVwb3NpdG9yeS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaXNJbkdpdFJlcG9zaXRvcnkoZGlyOiBzdHJpbmcpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAoYXdhaXQgZnMucGF0aEV4aXN0cyhwYXRoLmpvaW4oZGlyLCAnLmdpdCcpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChpc1Jvb3QoZGlyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBkaXIgPSBwYXRoLmRpcm5hbWUoZGlyKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSBkaXIgYSBkaXJlY3RvcnkgdG8gYmUgY2hlY2tlZC5cbiAqIEByZXR1cm5zIHRydWUgaWYgYGBkaXJgYCBpcyB0aGUgcm9vdCBvZiBhIGZpbGVzeXN0ZW0uXG4gKi9cbmZ1bmN0aW9uIGlzUm9vdChkaXI6IHN0cmluZykge1xuICByZXR1cm4gcGF0aC5kaXJuYW1lKGRpcikgPT09IGRpcjtcbn1cblxuLyoqXG4gKiBFeGVjdXRlcyBgY29tbWFuZGAuIFNUREVSUiBpcyBlbWl0dGVkIGluIHJlYWwtdGltZS5cbiAqXG4gKiBJZiBjb21tYW5kIGV4aXRzIHdpdGggbm9uLXplcm8gZXhpdCBjb2RlLCBhbiBleGNlcHJpb24gaXMgdGhyb3duIGFuZCBpbmNsdWRlc1xuICogdGhlIGNvbnRlbnRzIG9mIFNURE9VVC5cbiAqXG4gKiBAcmV0dXJucyBTVERPVVQgKGlmIHN1Y2Nlc3NmdWwpLlxuICovXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlKGNtZDogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSwgeyBjd2QgfTogeyBjd2Q6IHN0cmluZyB9KSB7XG4gIGNvbnN0IGNoaWxkID0gY2hpbGRQcm9jZXNzLnNwYXduKGNtZCwgYXJncywgeyBjd2QsIHNoZWxsOiB0cnVlLCBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpbmhlcml0J10gfSk7XG4gIGxldCBzdGRvdXQgPSAnJztcbiAgY2hpbGQuc3Rkb3V0Lm9uKCdkYXRhJywgKGNodW5rKSA9PiAoc3Rkb3V0ICs9IGNodW5rLnRvU3RyaW5nKCkpKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKG9rLCBmYWlsKSA9PiB7XG4gICAgY2hpbGQub25jZSgnZXJyb3InLCAoZXJyKSA9PiBmYWlsKGVycikpO1xuICAgIGNoaWxkLm9uY2UoJ2V4aXQnLCAoc3RhdHVzKSA9PiB7XG4gICAgICBpZiAoc3RhdHVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvayhzdGRvdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoc3Rkb3V0KTtcbiAgICAgICAgcmV0dXJuIGZhaWwobmV3IEVycm9yKGAke2NtZH0gZXhpdGVkIHdpdGggc3RhdHVzICR7c3RhdHVzfWApKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iXX0=