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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQWlEO0FBQ2pELDhDQUE4QztBQUM5QyxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qix1Q0FBa0Q7QUFDbEQsb0RBQWdEO0FBSWhELHNGQUFzRjtBQUN0RixpRUFBaUU7QUFDakUsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZDLGlFQUFpRTtBQUNqRSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsZ0NBQWdDO0FBRWhDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFN0Q7O0dBRUc7QUFDSSxLQUFLLFVBQVUsT0FBTyxDQUMzQixPQUFnQixFQUNoQixRQUFpQixFQUNqQixhQUFhLEdBQUcsSUFBSSxFQUNwQixZQUFZLEdBQUcsS0FBSyxFQUNwQixPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRTtJQUV2QixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ3pCLE1BQU0sdUJBQXVCLEVBQUUsQ0FBQztRQUNoQyxPQUFPO0tBQ1I7SUFFRCxPQUFPLEdBQUcsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLHVEQUF1RDtJQUV2RixNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sOEJBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBUSxDQUFDLENBQUMsQ0FBQztJQUNqRixJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2IsTUFBTSx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixPQUFPLEVBQUUsQ0FBQyxDQUFD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QUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hHLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakUsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM1QixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsdUJBQXVCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMvRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hhcGkgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY3hhcGknO1xyXG5pbXBvcnQgKiBhcyBjaGlsZFByb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XHJcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICdjb2xvcnMvc2FmZSc7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgZXJyb3IsIHByaW50LCB3YXJuaW5nIH0gZnJvbSAnLi9sb2dnaW5nJztcclxuaW1wb3J0IHsgY2RrSG9tZURpciB9IGZyb20gJy4vdXRpbC9kaXJlY3Rvcmllcyc7XHJcblxyXG5leHBvcnQgdHlwZSBJbnZva2VIb29rID0gKHRhcmdldERpcmVjdG9yeTogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGU6bm8tdmFyLXJlcXVpcmVzIHRob3NlIGxpYnJhcmllcyBkb24ndCBoYXZlIHVwLXRvLWRhdGUgQHR5cGVzIG1vZHVsZXNcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcclxuY29uc3QgY2FtZWxDYXNlID0gcmVxdWlyZSgnY2FtZWxjYXNlJyk7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXHJcbmNvbnN0IGRlY2FtZWxpemUgPSByZXF1aXJlKCdkZWNhbWVsaXplJyk7XHJcbi8vIHRzbGludDplbmFibGU6bm8tdmFyLXJlcXVpcmVzXHJcblxyXG5jb25zdCBURU1QTEFURVNfRElSID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ2luaXQtdGVtcGxhdGVzJyk7XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIENESyBwYWNrYWdlIGluIHRoZSBjdXJyZW50IGRpcmVjdG9yeVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsaUluaXQoXHJcbiAgYXBwTmFtZT86IHN0cmluZyxcclxuICBsYW5ndWFnZT86IHN0cmluZyxcclxuICBjYW5Vc2VOZXR3b3JrID0gdHJ1ZSxcclxuICBnZW5lcmF0ZU9ubHkgPSBmYWxzZSxcclxuICB3b3JrRGlyID0gcHJvY2Vzcy5jd2QoKSxcclxuKSB7XHJcbiAgaWYgKCFhcHBOYW1lICYmICFsYW5ndWFnZSkge1xyXG4gICAgYXdhaXQgcHJpbnRBdmFpbGFibGVUZW1wbGF0ZXMoKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGFwcE5hbWUgPSBhcHBOYW1lIHx8ICdkZWZhdWx0JzsgLy8gXCJkZWZhdWx0XCIgaXMgdGhlIGRlZmF1bHQgYXBwTmFtZSAoYW5kIG1hcHMgdG8gXCJhcHBcIilcclxuXHJcbiAgY29uc3QgdGVtcGxhdGUgPSAoYXdhaXQgYXZhaWxhYmxlSW5pdFRlbXBsYXRlcykuZmluZCgodCkgPT4gdC5oYXNOYW1lKGFwcE5hbWUhKSk7XHJcbiAgaWYgKCF0ZW1wbGF0ZSkge1xyXG4gICAgYXdhaXQgcHJpbnRBdmFpbGFibGVUZW1wbGF0ZXMobGFuZ3VhZ2UpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGluaXQgdGVtcGxhdGU6ICR7YXBwTmFtZX1gKTtcclxuICB9XHJcbiAgaWYgKCFsYW5ndWFnZSAmJiB0ZW1wbGF0ZS5sYW5ndWFnZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICBsYW5ndWFnZSA9IHRlbXBsYXRlLmxhbmd1YWdlc1swXTtcclxuICAgIHdhcm5pbmcoXHJcbiAgICAgIGBObyAtLWxhbmd1YWdlIHdhcyBwcm92aWRlZCwgYnV0ICcke2FwcE5hbWV9JyBzdXBwb3J0cyBvbmx5ICcke2xhbmd1YWdlfScsIHNvIGRlZmF1bHRpbmcgdG8gLS1sYW5ndWFnZT0ke2xhbmd1YWdlfWAsXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoIWxhbmd1YWdlKSB7XHJcbiAgICBwcmludChcclxuICAgICAgYEF2YWlsYWJsZSBsYW5ndWFnZXMgZm9yICR7Y29sb3JzLmdyZWVuKGFwcE5hbWUpfTogJHt0ZW1wbGF0ZS5sYW5ndWFnZXMubWFwKChsKSA9PiBjb2xvcnMuYmx1ZShsKSkuam9pbignLCAnKX1gLFxyXG4gICAgKTtcclxuICAgIHRocm93IG5ldyBFcnJvcignTm8gbGFuZ3VhZ2Ugd2FzIHNlbGVjdGVkJyk7XHJcbiAgfVxyXG5cclxuICBhd2FpdCBpbml0aWFsaXplUHJvamVjdCh0ZW1wbGF0ZSwgbGFuZ3VhZ2UsIGNhblVzZU5ldHdvcmssIGdlbmVyYXRlT25seSwgd29ya0Rpcik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBQeXRob24gZXhlY3V0YWJsZSBmb3IgdGhpcyBPU1xyXG4gKi9cclxuZnVuY3Rpb24gcHl0aG9uRXhlY3V0YWJsZSgpIHtcclxuICBsZXQgcHl0aG9uID0gJ3B5dGhvbjMnO1xyXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XHJcbiAgICBweXRob24gPSAncHl0aG9uJztcclxuICB9XHJcbiAgcmV0dXJuIHB5dGhvbjtcclxufVxyXG5jb25zdCBJTkZPX0RPVF9KU09OID0gJ2luZm8uanNvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5pdFRlbXBsYXRlIHtcclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGZyb21OYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgYmFzZVBhdGggPSBwYXRoLmpvaW4oVEVNUExBVEVTX0RJUiwgbmFtZSk7XHJcbiAgICBjb25zdCBsYW5ndWFnZXMgPSAoYXdhaXQgbGlzdERpcmVjdG9yeShiYXNlUGF0aCkpLmZpbHRlcigoZikgPT4gZiAhPT0gSU5GT19ET1RfSlNPTik7XHJcbiAgICBjb25zdCBpbmZvID0gYXdhaXQgZnMucmVhZEpzb24ocGF0aC5qb2luKGJhc2VQYXRoLCBJTkZPX0RPVF9KU09OKSk7XHJcbiAgICByZXR1cm4gbmV3IEluaXRUZW1wbGF0ZShiYXNlUGF0aCwgbmFtZSwgbGFuZ3VhZ2VzLCBpbmZvKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHB1YmxpYyByZWFkb25seSBhbGlhc2VzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBiYXNlUGF0aDogc3RyaW5nLFxyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcclxuICAgIHB1YmxpYyByZWFkb25seSBsYW5ndWFnZXM6IHN0cmluZ1tdLFxyXG4gICAgaW5mbzogYW55LFxyXG4gICkge1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGluZm8uZGVzY3JpcHRpb247XHJcbiAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIGluZm8uYWxpYXNlcyB8fCBbXSkge1xyXG4gICAgICB0aGlzLmFsaWFzZXMuYWRkKGFsaWFzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIHRoYXQgaXMgYmVpbmcgY2hlY2tlZFxyXG4gICAqIEByZXR1cm5zIGBgdHJ1ZWBgIGlmIGBgbmFtZWBgIGlzIHRoZSBuYW1lIG9mIHRoaXMgdGVtcGxhdGUgb3IgYW4gYWxpYXMgb2YgaXQuXHJcbiAgICovXHJcbiAgcHVibGljIGhhc05hbWUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbmFtZSA9PT0gdGhpcy5uYW1lIHx8IHRoaXMuYWxpYXNlcy5oYXMobmFtZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgYGBJbml0VGVtcGxhdGVgYCBmb3IgYSBnaXZlbiBsYW5ndWFnZSB0byBhIHNwZWNpZmllZCBmb2xkZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbGFuZ3VhZ2UgICAgdGhlIGxhbmd1YWdlIHRvIGluc3RhbnRpYXRlIHRoaXMgdGVtcGxhdGUgd2l0aFxyXG4gICAqIEBwYXJhbSB0YXJnZXREaXJlY3RvcnkgdGhlIGRpcmVjdG9yeSB3aGVyZSB0aGUgdGVtcGxhdGUgaXMgdG8gYmUgaW5zdGFudGlhdGVkIGludG9cclxuICAgKi9cclxuICBwdWJsaWMgYXN5bmMgaW5zdGFsbChsYW5ndWFnZTogc3RyaW5nLCB0YXJnZXREaXJlY3Rvcnk6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMubGFuZ3VhZ2VzLmluZGV4T2YobGFuZ3VhZ2UpID09PSAtMSkge1xyXG4gICAgICBlcnJvcihcclxuICAgICAgICBgVGhlICR7Y29sb3JzLmJsdWUobGFuZ3VhZ2UpfSBsYW5ndWFnZSBpcyBub3Qgc3VwcG9ydGVkIGZvciAke2NvbG9ycy5ncmVlbih0aGlzLm5hbWUpfSBgICtcclxuICAgICAgICAgIGAoaXQgc3VwcG9ydHM6ICR7dGhpcy5sYW5ndWFnZXMubWFwKChsKSA9PiBjb2xvcnMuYmx1ZShsKSkuam9pbignLCAnKX0pYCxcclxuICAgICAgKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBsYW5ndWFnZTogJHtsYW5ndWFnZX1gKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNvdXJjZURpcmVjdG9yeSA9IHBhdGguam9pbih0aGlzLmJhc2VQYXRoLCBsYW5ndWFnZSk7XHJcbiAgICBjb25zdCBob29rVGVtcERpcmVjdG9yeSA9IHBhdGguam9pbih0YXJnZXREaXJlY3RvcnksICd0bXAnKTtcclxuICAgIGF3YWl0IGZzLm1rZGlyKGhvb2tUZW1wRGlyZWN0b3J5KTtcclxuICAgIGF3YWl0IHRoaXMuaW5zdGFsbEZpbGVzKHNvdXJjZURpcmVjdG9yeSwgdGFyZ2V0RGlyZWN0b3J5LCB7XHJcbiAgICAgIG5hbWU6IGRlY2FtZWxpemUocGF0aC5iYXNlbmFtZShwYXRoLnJlc29sdmUodGFyZ2V0RGlyZWN0b3J5KSkpLFxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCB0aGlzLmFwcGx5RnV0dXJlRmxhZ3ModGFyZ2V0RGlyZWN0b3J5KTtcclxuICAgIGF3YWl0IHRoaXMuaW52b2tlSG9va3MoaG9va1RlbXBEaXJlY3RvcnksIHRhcmdldERpcmVjdG9yeSk7XHJcbiAgICBhd2FpdCBmcy5yZW1vdmUoaG9va1RlbXBEaXJlY3RvcnkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBpbnN0YWxsRmlsZXMoc291cmNlRGlyZWN0b3J5OiBzdHJpbmcsIHRhcmdldERpcmVjdG9yeTogc3RyaW5nLCBwcm9qZWN0OiBQcm9qZWN0SW5mbykge1xyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGF3YWl0IGZzLnJlYWRkaXIoc291cmNlRGlyZWN0b3J5KSkge1xyXG4gICAgICBjb25zdCBmcm9tRmlsZSA9IHBhdGguam9pbihzb3VyY2VEaXJlY3RvcnksIGZpbGUpO1xyXG4gICAgICBjb25zdCB0b0ZpbGUgPSBwYXRoLmpvaW4odGFyZ2V0RGlyZWN0b3J5LCB0aGlzLmV4cGFuZCh1bmVzY2FwZShmaWxlKSwgcHJvamVjdCkpO1xyXG4gICAgICBpZiAoKGF3YWl0IGZzLnN0YXQoZnJvbUZpbGUpKS5pc0RpcmVjdG9yeSgpKSB7XHJcbiAgICAgICAgYXdhaXQgZnMubWtkaXIodG9GaWxlKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmluc3RhbGxGaWxlcyhmcm9tRmlsZSwgdG9GaWxlLCBwcm9qZWN0KTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfSBlbHNlIGlmIChmaWxlLm1hdGNoKC9eLipcXC50ZW1wbGF0ZVxcLlteLl0rJC8pKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5pbnN0YWxsUHJvY2Vzc2VkKGZyb21GaWxlLCB0b0ZpbGUucmVwbGFjZSgvXFwudGVtcGxhdGUoXFwuW14uXSspJC8sICckMScpLCBwcm9qZWN0KTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfSBlbHNlIGlmIChmaWxlLm1hdGNoKC9eLipcXC5ob29rXFwuKGQuKT9bXi5dKyQvKSkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5zdGFsbFByb2Nlc3NlZChmcm9tRmlsZSwgcGF0aC5qb2luKHRhcmdldERpcmVjdG9yeSwgJ3RtcCcsIGZpbGUpLCBwcm9qZWN0KTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfSBlbHNlIGlmIChmaWxlLmVuZHNXaXRoKCcudGVtcGxhdGUnKSkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5zdGFsbFByb2Nlc3NlZChmcm9tRmlsZSwgdG9GaWxlLnN1YnN0cmluZygwLCB0b0ZpbGUubGVuZ3RoIC0gOSksIHByb2plY3QpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF3YWl0IGZzLmNvcHkoZnJvbUZpbGUsIHRvRmlsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdW1tYXJ5ICAgSW52b2tlIGFueSBqYXZhc2NyaXB0IGhvb2tzIHRoYXQgZXhpc3QgaW4gdGhlIHRlbXBsYXRlLlxyXG4gICAqIEBkZXNjcmlwdGlvbiBTb21ldGltZXMgdGVtcGxhdGVzIG5lZWQgbW9yZSBjb21wbGV4IGxvZ2ljIHRoYW4ganVzdCByZXBsYWNpbmcgdG9rZW5zLiBBICdob29rJyBpc1xyXG4gICAqICAgICAgICBhbnkgZmlsZSB0aGF0IGVuZHMgaW4gLmhvb2suanMuIEl0IHNob3VsZCBleHBvcnQgYSBzaW5nbGUgZnVuY3Rpb24gY2FsbGVkIFwiaW52b2tlXCJcclxuICAgKiAgICAgICAgdGhhdCBhY2NlcHRzIGEgc2luZ2xlIHN0cmluZyBwYXJhbWV0ZXIuIFdoZW4gdGhlIHRlbXBsYXRlIGlzIGluc3RhbGxlZCwgZWFjaCBob29rXHJcbiAgICogICAgICAgIHdpbGwgYmUgaW52b2tlZCwgcGFzc2luZyB0aGUgdGFyZ2V0IGRpcmVjdG9yeSBhcyB0aGUgb25seSBhcmd1bWVudC4gSG9va3MgYXJlIGludm9rZWRcclxuICAgKiAgICAgICAgaW4gbGV4aWNhbCBvcmRlci5cclxuICAgKi9cclxuICBwcml2YXRlIGFzeW5jIGludm9rZUhvb2tzKHNvdXJjZURpcmVjdG9yeTogc3RyaW5nLCB0YXJnZXREaXJlY3Rvcnk6IHN0cmluZykge1xyXG4gICAgY29uc3QgZmlsZXMgPSBhd2FpdCBmcy5yZWFkZGlyKHNvdXJjZURpcmVjdG9yeSk7XHJcbiAgICBmaWxlcy5zb3J0KCk7IC8vIFNvcnRpbmcgYWxsb3dzIHRlbXBsYXRlIGF1dGhvcnMgdG8gY29udHJvbCB0aGUgb3JkZXIgaW4gd2hpY2ggaG9va3MgYXJlIGludm9rZWQuXHJcblxyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAgIGlmIChmaWxlLm1hdGNoKC9eLipcXC5ob29rXFwuanMkLykpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xyXG4gICAgICAgIGNvbnN0IGludm9rZTogSW52b2tlSG9vayA9IHJlcXVpcmUocGF0aC5qb2luKHNvdXJjZURpcmVjdG9yeSwgZmlsZSkpLmludm9rZTtcclxuICAgICAgICBhd2FpdCBpbnZva2UodGFyZ2V0RGlyZWN0b3J5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBpbnN0YWxsUHJvY2Vzc2VkKHRlbXBsYXRlUGF0aDogc3RyaW5nLCB0b0ZpbGU6IHN0cmluZywgcHJvamVjdDogUHJvamVjdEluZm8pIHtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgZnMucmVhZEZpbGUodGVtcGxhdGVQYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xyXG4gICAgYXdhaXQgZnMud3JpdGVGaWxlKHRvRmlsZSwgdGhpcy5leHBhbmQodGVtcGxhdGUsIHByb2plY3QpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwYW5kKHRlbXBsYXRlOiBzdHJpbmcsIHByb2plY3Q6IFByb2plY3RJbmZvKSB7XHJcbiAgICBjb25zdCBNQVRDSF9WRVJfQlVJTEQgPSAvXFwrW2EtZjAtOV0rJC87IC8vIE1hdGNoZXMgXCIrQlVJTERcIiBpbiBcIngueS56LWJldGErQlVJTERcIlxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcclxuICAgIGNvbnN0IGNka1ZlcnNpb24gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uLnJlcGxhY2UoTUFUQ0hfVkVSX0JVSUxELCAnJyk7XHJcbiAgICByZXR1cm4gdGVtcGxhdGVcclxuICAgICAgLnJlcGxhY2UoLyVuYW1lJS9nLCBwcm9qZWN0Lm5hbWUpXHJcbiAgICAgIC5yZXBsYWNlKC8lbmFtZVxcLmNhbWVsQ2FzZWQlL2csIGNhbWVsQ2FzZShwcm9qZWN0Lm5hbWUpKVxyXG4gICAgICAucmVwbGFjZSgvJW5hbWVcXC5QYXNjYWxDYXNlZCUvZywgY2FtZWxDYXNlKHByb2plY3QubmFtZSwgeyBwYXNjYWxDYXNlOiB0cnVlIH0pKVxyXG4gICAgICAucmVwbGFjZSgvJWNkay12ZXJzaW9uJS9nLCBjZGtWZXJzaW9uKVxyXG4gICAgICAucmVwbGFjZSgvJWNkay1ob21lJS9nLCBjZGtIb21lRGlyKCkpXHJcbiAgICAgIC5yZXBsYWNlKC8lbmFtZVxcLlB5dGhvbk1vZHVsZSUvZywgcHJvamVjdC5uYW1lLnJlcGxhY2UoLy0vZywgJ18nKSlcclxuICAgICAgLnJlcGxhY2UoLyVweXRob24tZXhlY3V0YWJsZSUvZywgcHl0aG9uRXhlY3V0YWJsZSgpKVxyXG4gICAgICAucmVwbGFjZSgvJW5hbWVcXC5TdGFja05hbWUlL2csIHByb2plY3QubmFtZS5yZXBsYWNlKC9bXkEtWmEtejAtOS1dL2csICctJykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBjb250ZXh0IHZhcmlhYmxlcyB0byBgY2RrLmpzb25gIGluIHRoZSBnZW5lcmF0ZWQgcHJvamVjdCBkaXJlY3RvcnkgdG9cclxuICAgKiBlbmFibGUgZnV0dXJlIGJlaGF2aW9yIGZvciBuZXcgcHJvamVjdHMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhc3luYyBhcHBseUZ1dHVyZUZsYWdzKHByb2plY3REaXI6IHN0cmluZykge1xyXG4gICAgY29uc3QgY2RrSnNvbiA9IHBhdGguam9pbihwcm9qZWN0RGlyLCAnY2RrLmpzb24nKTtcclxuICAgIGlmICghKGF3YWl0IGZzLnBhdGhFeGlzdHMoY2RrSnNvbikpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBmcy5yZWFkSnNvbihjZGtKc29uKTtcclxuICAgIGNvbmZpZy5jb250ZXh0ID0ge1xyXG4gICAgICAuLi5jb25maWcuY29udGV4dCxcclxuICAgICAgLi4uY3hhcGkuRlVUVVJFX0ZMQUdTLFxyXG4gICAgfTtcclxuXHJcbiAgICBhd2FpdCBmcy53cml0ZUpzb24oY2RrSnNvbiwgY29uZmlnLCB7IHNwYWNlczogMiB9KTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9qZWN0SW5mbyB7XHJcbiAgLyoqIFRoZSB2YWx1ZSB1c2VkIGZvciAlbmFtZSUgKi9cclxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdmFpbGFibGVJbml0VGVtcGxhdGVzOiBQcm9taXNlPEluaXRUZW1wbGF0ZVtdPiA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgY29uc3QgdGVtcGxhdGVOYW1lcyA9IGF3YWl0IGxpc3REaXJlY3RvcnkoVEVNUExBVEVTX0RJUik7XHJcbiAgY29uc3QgdGVtcGxhdGVzID0gbmV3IEFycmF5PEluaXRUZW1wbGF0ZT4oKTtcclxuICBmb3IgKGNvbnN0IHRlbXBsYXRlTmFtZSBvZiB0ZW1wbGF0ZU5hbWVzKSB7XHJcbiAgICB0ZW1wbGF0ZXMucHVzaChhd2FpdCBJbml0VGVtcGxhdGUuZnJvbU5hbWUodGVtcGxhdGVOYW1lKSk7XHJcbiAgfVxyXG4gIHJlc29sdmUodGVtcGxhdGVzKTtcclxufSk7XHJcbmV4cG9ydCBjb25zdCBhdmFpbGFibGVJbml0TGFuZ3VhZ2VzOiBQcm9taXNlPHN0cmluZ1tdPiA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgY29uc3QgdGVtcGxhdGVzID0gYXdhaXQgYXZhaWxhYmxlSW5pdFRlbXBsYXRlcztcclxuICBjb25zdCByZXN1bHQgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRlbXBsYXRlcykge1xyXG4gICAgZm9yIChjb25zdCBsYW5ndWFnZSBvZiB0ZW1wbGF0ZS5sYW5ndWFnZXMpIHtcclxuICAgICAgcmVzdWx0LmFkZChsYW5ndWFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlc29sdmUoWy4uLnJlc3VsdF0pO1xyXG59KTtcclxuLyoqXHJcbiAqIEBwYXJhbSBkaXJQYXRoIGlzIHRoZSBkaXJlY3RvcnkgdG8gYmUgbGlzdGVkLlxyXG4gKiBAcmV0dXJucyB0aGUgbGlzdCBvZiBmaWxlIG9yIGRpcmVjdG9yeSBuYW1lcyBjb250YWluZWQgaW4gYGBkaXJQYXRoYGAsIGV4Y2x1ZGluZyBhbnkgZG90LWZpbGUsIGFuZCBzb3J0ZWQuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsaXN0RGlyZWN0b3J5KGRpclBhdGg6IHN0cmluZykge1xyXG4gIHJldHVybiAoYXdhaXQgZnMucmVhZGRpcihkaXJQYXRoKSkuZmlsdGVyKChwKSA9PiAhcC5zdGFydHNXaXRoKCcuJykpLnNvcnQoKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByaW50QXZhaWxhYmxlVGVtcGxhdGVzKGxhbmd1YWdlPzogc3RyaW5nKSB7XHJcbiAgcHJpbnQoJ0F2YWlsYWJsZSB0ZW1wbGF0ZXM6Jyk7XHJcbiAgZm9yIChjb25zdCB0ZW1wbGF0ZSBvZiBhd2FpdCBhdmFpbGFibGVJbml0VGVtcGxhdGVzKSB7XHJcbiAgICBpZiAobGFuZ3VhZ2UgJiYgdGVtcGxhdGUubGFuZ3VhZ2VzLmluZGV4T2YobGFuZ3VhZ2UpID09PSAtMSkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICAgIHByaW50KGAqICR7Y29sb3JzLmdyZWVuKHRlbXBsYXRlLm5hbWUpfTogJHt0ZW1wbGF0ZS5kZXNjcmlwdGlvbn1gKTtcclxuICAgIGNvbnN0IGxhbmd1YWdlQXJnID0gbGFuZ3VhZ2VcclxuICAgICAgPyBjb2xvcnMuYm9sZChsYW5ndWFnZSlcclxuICAgICAgOiB0ZW1wbGF0ZS5sYW5ndWFnZXMubGVuZ3RoID4gMVxyXG4gICAgICA/IGBbJHt0ZW1wbGF0ZS5sYW5ndWFnZXMubWFwKCh0KSA9PiBjb2xvcnMuYm9sZCh0KSkuam9pbignfCcpfV1gXHJcbiAgICAgIDogY29sb3JzLmJvbGQodGVtcGxhdGUubGFuZ3VhZ2VzWzBdKTtcclxuICAgIHByaW50KGAgICDilJTilIAgJHtjb2xvcnMuYmx1ZShgY2RrIGluaXQgJHtjb2xvcnMuYm9sZCh0ZW1wbGF0ZS5uYW1lKX0gLS1sYW5ndWFnZT0ke2xhbmd1YWdlQXJnfWApfWApO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVByb2plY3QoXHJcbiAgdGVtcGxhdGU6IEluaXRUZW1wbGF0ZSxcclxuICBsYW5ndWFnZTogc3RyaW5nLFxyXG4gIGNhblVzZU5ldHdvcms6IGJvb2xlYW4sXHJcbiAgZ2VuZXJhdGVPbmx5OiBib29sZWFuLFxyXG4gIHdvcmtEaXI6IHN0cmluZyxcclxuKSB7XHJcbiAgYXdhaXQgYXNzZXJ0SXNFbXB0eURpcmVjdG9yeSh3b3JrRGlyKTtcclxuXHJcbiAgcHJpbnQoYEFwcGx5aW5nIHByb2plY3QgdGVtcGxhdGUgJHtjb2xvcnMuZ3JlZW4odGVtcGxhdGUubmFtZSl9IGZvciAke2NvbG9ycy5ibHVlKGxhbmd1YWdlKX1gKTtcclxuICBhd2FpdCB0ZW1wbGF0ZS5pbnN0YWxsKGxhbmd1YWdlLCB3b3JrRGlyKTtcclxuICBpZiAoYXdhaXQgZnMucGF0aEV4aXN0cygnUkVBRE1FLm1kJykpIHtcclxuICAgIHByaW50KGNvbG9ycy5ncmVlbihhd2FpdCBmcy5yZWFkRmlsZSgnUkVBRE1FLm1kJywgeyBlbmNvZGluZzogJ3V0Zi04JyB9KSkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFnZW5lcmF0ZU9ubHkpIHtcclxuICAgIGF3YWl0IGluaXRpYWxpemVHaXRSZXBvc2l0b3J5KHdvcmtEaXIpO1xyXG4gICAgYXdhaXQgcG9zdEluc3RhbGwobGFuZ3VhZ2UsIGNhblVzZU5ldHdvcmssIHdvcmtEaXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpbnQoJ+KchSBBbGwgZG9uZSEnKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYXNzZXJ0SXNFbXB0eURpcmVjdG9yeSh3b3JrRGlyOiBzdHJpbmcpIHtcclxuICBjb25zdCBmaWxlcyA9IGF3YWl0IGZzLnJlYWRkaXIod29ya0Rpcik7XHJcbiAgaWYgKGZpbGVzLmZpbHRlcigoZikgPT4gIWYuc3RhcnRzV2l0aCgnLicpKS5sZW5ndGggIT09IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignYHJvcyBpbml0YCBjYW5ub3QgYmUgcnVuIGluIGEgbm9uLWVtcHR5IGRpcmVjdG9yeSEnKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVHaXRSZXBvc2l0b3J5KHdvcmtEaXI6IHN0cmluZykge1xyXG4gIGlmIChhd2FpdCBpc0luR2l0UmVwb3NpdG9yeSh3b3JrRGlyKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBwcmludCgnSW5pdGlhbGl6aW5nIGEgbmV3IGdpdCByZXBvc2l0b3J5Li4uJyk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGV4ZWN1dGUoJ2dpdCcsIFsnaW5pdCddLCB7IGN3ZDogd29ya0RpciB9KTtcclxuICAgIGF3YWl0IGV4ZWN1dGUoJ2dpdCcsIFsnYWRkJywgJy4nXSwgeyBjd2Q6IHdvcmtEaXIgfSk7XHJcbiAgICBhd2FpdCBleGVjdXRlKCdnaXQnLCBbJ2NvbW1pdCcsICctLW1lc3NhZ2U9XCJJbml0aWFsIGNvbW1pdFwiJywgJy0tbm8tZ3BnLXNpZ24nXSwgeyBjd2Q6IHdvcmtEaXIgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgd2FybmluZygnVW5hYmxlIHRvIGluaXRpYWxpemUgZ2l0IHJlcG9zaXRvcnkgZm9yIHlvdXIgcHJvamVjdC4nKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBvc3RJbnN0YWxsKGxhbmd1YWdlOiBzdHJpbmcsIGNhblVzZU5ldHdvcms6IGJvb2xlYW4sIHdvcmtEaXI6IHN0cmluZykge1xyXG4gIHN3aXRjaCAobGFuZ3VhZ2UpIHtcclxuICAgIGNhc2UgJ2phdmFzY3JpcHQnOlxyXG4gICAgICByZXR1cm4gYXdhaXQgcG9zdEluc3RhbGxKYXZhc2NyaXB0KGNhblVzZU5ldHdvcmssIHdvcmtEaXIpO1xyXG4gICAgY2FzZSAndHlwZXNjcmlwdCc6XHJcbiAgICAgIHJldHVybiBhd2FpdCBwb3N0SW5zdGFsbFR5cGVzY3JpcHQoY2FuVXNlTmV0d29yaywgd29ya0Rpcik7XHJcbiAgICBjYXNlICdqYXZhJzpcclxuICAgICAgcmV0dXJuIGF3YWl0IHBvc3RJbnN0YWxsSmF2YShjYW5Vc2VOZXR3b3JrLCB3b3JrRGlyKTtcclxuICAgIGNhc2UgJ3B5dGhvbic6XHJcbiAgICAgIHJldHVybiBhd2FpdCBwb3N0SW5zdGFsbFB5dGhvbih3b3JrRGlyKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBvc3RJbnN0YWxsSmF2YXNjcmlwdChjYW5Vc2VOZXR3b3JrOiBib29sZWFuLCBjd2Q6IHN0cmluZykge1xyXG4gIHJldHVybiBwb3N0SW5zdGFsbFR5cGVzY3JpcHQoY2FuVXNlTmV0d29yaywgY3dkKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcG9zdEluc3RhbGxUeXBlc2NyaXB0KGNhblVzZU5ldHdvcms6IGJvb2xlYW4sIGN3ZDogc3RyaW5nKSB7XHJcbiAgY29uc3QgY29tbWFuZCA9ICducG0nO1xyXG5cclxuICBpZiAoIWNhblVzZU5ldHdvcmspIHtcclxuICAgIHdhcm5pbmcoYFBsZWFzZSBydW4gJyR7Y29tbWFuZH0gaW5zdGFsbCchYCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBwcmludChgRXhlY3V0aW5nICR7Y29sb3JzLmdyZWVuKGAke2NvbW1hbmR9IGluc3RhbGxgKX0uLi5gKTtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgZXhlY3V0ZShjb21tYW5kLCBbJ2luc3RhbGwnXSwgeyBjd2QgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgd2FybmluZyhgJHtjb21tYW5kfSBpbnN0YWxsIGZhaWxlZDogYCArIGUubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwb3N0SW5zdGFsbEphdmEoY2FuVXNlTmV0d29yazogYm9vbGVhbiwgY3dkOiBzdHJpbmcpIHtcclxuICBjb25zdCBtdm5QYWNrYWdlV2FybmluZyA9IFwiUGxlYXNlIHJ1biAnbXZuIHBhY2thZ2UnIVwiO1xyXG4gIGlmICghY2FuVXNlTmV0d29yaykge1xyXG4gICAgd2FybmluZyhtdm5QYWNrYWdlV2FybmluZyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBwcmludChcIkV4ZWN1dGluZyAnbXZuIHBhY2thZ2UnXCIpO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBleGVjdXRlKCdtdm4nLCBbJ3BhY2thZ2UnXSwgeyBjd2QgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgd2FybmluZygnVW5hYmxlIHRvIHBhY2thZ2UgY29tcGlsZWQgY29kZSBhcyBKQVInKTtcclxuICAgIHdhcm5pbmcobXZuUGFja2FnZVdhcm5pbmcpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcG9zdEluc3RhbGxQeXRob24oY3dkOiBzdHJpbmcpIHtcclxuICBjb25zdCBweXRob24gPSBweXRob25FeGVjdXRhYmxlKCk7XHJcbiAgd2FybmluZyhgUGxlYXNlIHJ1biAke3B5dGhvbn0gLW0gdmVudiAuZW52JyFgKTtcclxuICBwcmludChgRXhlY3V0aW5nICR7Y29sb3JzLmdyZWVuKCdDcmVhdGluZyB2aXJ0dWFsZW52Li4uJyl9YCk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGV4ZWN1dGUocHl0aG9uLCBbJy1tIHZlbnYnLCAnLmVudiddLCB7IGN3ZCB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB3YXJuaW5nKCdVbmFibGUgdG8gY3JlYXRlIHZpcnR1YWxlbnYgYXV0b21hdGljYWxseScpO1xyXG4gICAgd2FybmluZyhgUGxlYXNlIHJ1biAnJHtweXRob259IC1tIHZlbnYgLmVudichYCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGRpciBhIGRpcmVjdG9yeSB0byBiZSBjaGVja2VkXHJcbiAqIEByZXR1cm5zIHRydWUgaWYgYGBkaXJgYCBpcyB3aXRoaW4gYSBnaXQgcmVwb3NpdG9yeS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGlzSW5HaXRSZXBvc2l0b3J5KGRpcjogc3RyaW5nKSB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGlmIChhd2FpdCBmcy5wYXRoRXhpc3RzKHBhdGguam9pbihkaXIsICcuZ2l0JykpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzUm9vdChkaXIpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGRpciA9IHBhdGguZGlybmFtZShkaXIpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBkaXIgYSBkaXJlY3RvcnkgdG8gYmUgY2hlY2tlZC5cclxuICogQHJldHVybnMgdHJ1ZSBpZiBgYGRpcmBgIGlzIHRoZSByb290IG9mIGEgZmlsZXN5c3RlbS5cclxuICovXHJcbmZ1bmN0aW9uIGlzUm9vdChkaXI6IHN0cmluZykge1xyXG4gIHJldHVybiBwYXRoLmRpcm5hbWUoZGlyKSA9PT0gZGlyO1xyXG59XHJcblxyXG4vKipcclxuICogRXhlY3V0ZXMgYGNvbW1hbmRgLiBTVERFUlIgaXMgZW1pdHRlZCBpbiByZWFsLXRpbWUuXHJcbiAqXHJcbiAqIElmIGNvbW1hbmQgZXhpdHMgd2l0aCBub24temVybyBleGl0IGNvZGUsIGFuIGV4Y2VwcmlvbiBpcyB0aHJvd24gYW5kIGluY2x1ZGVzXHJcbiAqIHRoZSBjb250ZW50cyBvZiBTVERPVVQuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFNURE9VVCAoaWYgc3VjY2Vzc2Z1bCkuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlKGNtZDogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSwgeyBjd2QgfTogeyBjd2Q6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgY2hpbGQgPSBjaGlsZFByb2Nlc3Muc3Bhd24oY21kLCBhcmdzLCB7IGN3ZCwgc2hlbGw6IHRydWUsIHN0ZGlvOiBbJ2lnbm9yZScsICdwaXBlJywgJ2luaGVyaXQnXSB9KTtcclxuICBsZXQgc3Rkb3V0ID0gJyc7XHJcbiAgY2hpbGQuc3Rkb3V0Lm9uKCdkYXRhJywgKGNodW5rKSA9PiAoc3Rkb3V0ICs9IGNodW5rLnRvU3RyaW5nKCkpKTtcclxuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigob2ssIGZhaWwpID0+IHtcclxuICAgIGNoaWxkLm9uY2UoJ2Vycm9yJywgKGVycikgPT4gZmFpbChlcnIpKTtcclxuICAgIGNoaWxkLm9uY2UoJ2V4aXQnLCAoc3RhdHVzKSA9PiB7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gb2soc3Rkb3V0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShzdGRvdXQpO1xyXG4gICAgICAgIHJldHVybiBmYWlsKG5ldyBFcnJvcihgJHtjbWR9IGV4aXRlZCB3aXRoIHN0YXR1cyAke3N0YXR1c31gKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiJdfQ==