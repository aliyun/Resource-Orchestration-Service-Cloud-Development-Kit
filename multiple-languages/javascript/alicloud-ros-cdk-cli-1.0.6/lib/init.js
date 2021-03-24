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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQWlEO0FBQ2pELDhDQUE4QztBQUM5QyxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qix1Q0FBa0Q7QUFDbEQsb0RBQWdEO0FBQ2hELCtDQUEwRDtBQUkxRCxzRkFBc0Y7QUFDdEYsaUVBQWlFO0FBQ2pFLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN2QyxpRUFBaUU7QUFDakUsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pDLGdDQUFnQztBQUVoQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRTdEOztHQUVHO0FBQ0ksS0FBSyxVQUFVLE9BQU8sQ0FDM0IsT0FBZ0IsRUFDaEIsUUFBaUIsRUFDakIsYUFBYSxHQUFHLElBQUksRUFDcEIsWUFBWSxHQUFHLEtBQUssRUFDcEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUU7SUFFdkIsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUN6QixNQUFNLHVCQUF1QixFQUFFLENBQUM7UUFDaEMsT0FBTztLQUNSO0lBRUQsT0FBTyxHQUFHLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyx1REFBdUQ7SUFFdkYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLDhCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQVEsQ0FBQyxDQUFDLENBQUM7SUFDakYsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNiLE1BQU0sdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsT0FBTyxF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IGN4YXBpIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWN4YXBpJztcbmltcG9ydCAqIGFzIGNoaWxkUHJvY2VzcyBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICdjb2xvcnMvc2FmZSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZXJyb3IsIHByaW50LCB3YXJuaW5nIH0gZnJvbSAnLi9sb2dnaW5nJztcbmltcG9ydCB7IGNka0hvbWVEaXIgfSBmcm9tICcuL3V0aWwvZGlyZWN0b3JpZXMnO1xuaW1wb3J0IHsgd3JpdGVBbmRVcGRhdGVMYW5ndWFnZUluZm8gfSBmcm9tICcuL2Nkay10b29sa2l0J1xuXG5leHBvcnQgdHlwZSBJbnZva2VIb29rID0gKHRhcmdldERpcmVjdG9yeTogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby12YXItcmVxdWlyZXMgdGhvc2UgbGlicmFyaWVzIGRvbid0IGhhdmUgdXAtdG8tZGF0ZSBAdHlwZXMgbW9kdWxlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbmNvbnN0IGNhbWVsQ2FzZSA9IHJlcXVpcmUoJ2NhbWVsY2FzZScpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbmNvbnN0IGRlY2FtZWxpemUgPSByZXF1aXJlKCdkZWNhbWVsaXplJyk7XG4vLyB0c2xpbnQ6ZW5hYmxlOm5vLXZhci1yZXF1aXJlc1xuXG5jb25zdCBURU1QTEFURVNfRElSID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ2luaXQtdGVtcGxhdGVzJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIENESyBwYWNrYWdlIGluIHRoZSBjdXJyZW50IGRpcmVjdG9yeVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xpSW5pdChcbiAgYXBwTmFtZT86IHN0cmluZyxcbiAgbGFuZ3VhZ2U/OiBzdHJpbmcsXG4gIGNhblVzZU5ldHdvcmsgPSB0cnVlLFxuICBnZW5lcmF0ZU9ubHkgPSBmYWxzZSxcbiAgd29ya0RpciA9IHByb2Nlc3MuY3dkKCksXG4pIHtcbiAgaWYgKCFhcHBOYW1lICYmICFsYW5ndWFnZSkge1xuICAgIGF3YWl0IHByaW50QXZhaWxhYmxlVGVtcGxhdGVzKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXBwTmFtZSA9IGFwcE5hbWUgfHwgJ2RlZmF1bHQnOyAvLyBcImRlZmF1bHRcIiBpcyB0aGUgZGVmYXVsdCBhcHBOYW1lIChhbmQgbWFwcyB0byBcImFwcFwiKVxuXG4gIGNvbnN0IHRlbXBsYXRlID0gKGF3YWl0IGF2YWlsYWJsZUluaXRUZW1wbGF0ZXMpLmZpbmQoKHQpID0+IHQuaGFzTmFtZShhcHBOYW1lISkpO1xuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgYXdhaXQgcHJpbnRBdmFpbGFibGVUZW1wbGF0ZXMobGFuZ3VhZ2UpO1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBpbml0IHRlbXBsYXRlOiAke2FwcE5hbWV9YCk7XG4gIH1cbiAgaWYgKCFsYW5ndWFnZSAmJiB0ZW1wbGF0ZS5sYW5ndWFnZXMubGVuZ3RoID09PSAxKSB7XG4gICAgbGFuZ3VhZ2UgPSB0ZW1wbGF0ZS5sYW5ndWFnZXNbMF07XG4gICAgd2FybmluZyhcbiAgICAgIGBObyAtLWxhbmd1YWdlIHdhcyBwcm92aWRlZCwgYnV0ICcke2FwcE5hbWV9JyBzdXBwb3J0cyBvbmx5ICcke2xhbmd1YWdlfScsIHNvIGRlZmF1bHRpbmcgdG8gLS1sYW5ndWFnZT0ke2xhbmd1YWdlfWAsXG4gICAgKTtcbiAgfVxuICBpZiAoIWxhbmd1YWdlKSB7XG4gICAgcHJpbnQoXG4gICAgICBgQXZhaWxhYmxlIGxhbmd1YWdlcyBmb3IgJHtjb2xvcnMuZ3JlZW4oYXBwTmFtZSl9OiAke3RlbXBsYXRlLmxhbmd1YWdlcy5tYXAoKGwpID0+IGNvbG9ycy5ibHVlKGwpKS5qb2luKCcsICcpfWAsXG4gICAgKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGxhbmd1YWdlIHdhcyBzZWxlY3RlZCcpO1xuICB9XG5cbiAgYXdhaXQgaW5pdGlhbGl6ZVByb2plY3QodGVtcGxhdGUsIGxhbmd1YWdlLCBjYW5Vc2VOZXR3b3JrLCBnZW5lcmF0ZU9ubHksIHdvcmtEaXIpO1xuICB3cml0ZUFuZFVwZGF0ZUxhbmd1YWdlSW5mbyhsYW5ndWFnZSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgUHl0aG9uIGV4ZWN1dGFibGUgZm9yIHRoaXMgT1NcbiAqL1xuZnVuY3Rpb24gcHl0aG9uRXhlY3V0YWJsZSgpIHtcbiAgbGV0IHB5dGhvbiA9ICdweXRob24zJztcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICBweXRob24gPSAncHl0aG9uJztcbiAgfVxuICByZXR1cm4gcHl0aG9uO1xufVxuY29uc3QgSU5GT19ET1RfSlNPTiA9ICdpbmZvLmpzb24nO1xuXG5leHBvcnQgY2xhc3MgSW5pdFRlbXBsYXRlIHtcbiAgcHVibGljIHN0YXRpYyBhc3luYyBmcm9tTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBiYXNlUGF0aCA9IHBhdGguam9pbihURU1QTEFURVNfRElSLCBuYW1lKTtcbiAgICBjb25zdCBsYW5ndWFnZXMgPSAoYXdhaXQgbGlzdERpcmVjdG9yeShiYXNlUGF0aCkpLmZpbHRlcigoZikgPT4gZiAhPT0gSU5GT19ET1RfSlNPTik7XG4gICAgY29uc3QgaW5mbyA9IGF3YWl0IGZzLnJlYWRKc29uKHBhdGguam9pbihiYXNlUGF0aCwgSU5GT19ET1RfSlNPTikpO1xuICAgIHJldHVybiBuZXcgSW5pdFRlbXBsYXRlKGJhc2VQYXRoLCBuYW1lLCBsYW5ndWFnZXMsIGluZm8pO1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkb25seSBhbGlhc2VzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBiYXNlUGF0aDogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IGxhbmd1YWdlczogc3RyaW5nW10sXG4gICAgaW5mbzogYW55LFxuICApIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gaW5mby5kZXNjcmlwdGlvbjtcbiAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIGluZm8uYWxpYXNlcyB8fCBbXSkge1xuICAgICAgdGhpcy5hbGlhc2VzLmFkZChhbGlhcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIHRoYXQgaXMgYmVpbmcgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBgYHRydWVgYCBpZiBgYG5hbWVgYCBpcyB0aGUgbmFtZSBvZiB0aGlzIHRlbXBsYXRlIG9yIGFuIGFsaWFzIG9mIGl0LlxuICAgKi9cbiAgcHVibGljIGhhc05hbWUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG5hbWUgPT09IHRoaXMubmFtZSB8fCB0aGlzLmFsaWFzZXMuaGFzKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBgYEluaXRUZW1wbGF0ZWBgIGZvciBhIGdpdmVuIGxhbmd1YWdlIHRvIGEgc3BlY2lmaWVkIGZvbGRlci5cbiAgICpcbiAgICogQHBhcmFtIGxhbmd1YWdlICAgIHRoZSBsYW5ndWFnZSB0byBpbnN0YW50aWF0ZSB0aGlzIHRlbXBsYXRlIHdpdGhcbiAgICogQHBhcmFtIHRhcmdldERpcmVjdG9yeSB0aGUgZGlyZWN0b3J5IHdoZXJlIHRoZSB0ZW1wbGF0ZSBpcyB0byBiZSBpbnN0YW50aWF0ZWQgaW50b1xuICAgKi9cbiAgcHVibGljIGFzeW5jIGluc3RhbGwobGFuZ3VhZ2U6IHN0cmluZywgdGFyZ2V0RGlyZWN0b3J5OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5sYW5ndWFnZXMuaW5kZXhPZihsYW5ndWFnZSkgPT09IC0xKSB7XG4gICAgICBlcnJvcihcbiAgICAgICAgYFRoZSAke2NvbG9ycy5ibHVlKGxhbmd1YWdlKX0gbGFuZ3VhZ2UgaXMgbm90IHN1cHBvcnRlZCBmb3IgJHtjb2xvcnMuZ3JlZW4odGhpcy5uYW1lKX0gYCArXG4gICAgICAgICAgYChpdCBzdXBwb3J0czogJHt0aGlzLmxhbmd1YWdlcy5tYXAoKGwpID0+IGNvbG9ycy5ibHVlKGwpKS5qb2luKCcsICcpfSlgLFxuICAgICAgKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgbGFuZ3VhZ2U6ICR7bGFuZ3VhZ2V9YCk7XG4gICAgfVxuICAgIGNvbnN0IHNvdXJjZURpcmVjdG9yeSA9IHBhdGguam9pbih0aGlzLmJhc2VQYXRoLCBsYW5ndWFnZSk7XG4gICAgY29uc3QgaG9va1RlbXBEaXJlY3RvcnkgPSBwYXRoLmpvaW4odGFyZ2V0RGlyZWN0b3J5LCAndG1wJyk7XG4gICAgYXdhaXQgZnMubWtkaXIoaG9va1RlbXBEaXJlY3RvcnkpO1xuICAgIGF3YWl0IHRoaXMuaW5zdGFsbEZpbGVzKHNvdXJjZURpcmVjdG9yeSwgdGFyZ2V0RGlyZWN0b3J5LCB7XG4gICAgICBuYW1lOiBkZWNhbWVsaXplKHBhdGguYmFzZW5hbWUocGF0aC5yZXNvbHZlKHRhcmdldERpcmVjdG9yeSkpKSxcbiAgICB9KTtcbiAgICBhd2FpdCB0aGlzLmFwcGx5RnV0dXJlRmxhZ3ModGFyZ2V0RGlyZWN0b3J5KTtcbiAgICBhd2FpdCB0aGlzLmludm9rZUhvb2tzKGhvb2tUZW1wRGlyZWN0b3J5LCB0YXJnZXREaXJlY3RvcnkpO1xuICAgIGF3YWl0IGZzLnJlbW92ZShob29rVGVtcERpcmVjdG9yeSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluc3RhbGxGaWxlcyhzb3VyY2VEaXJlY3Rvcnk6IHN0cmluZywgdGFyZ2V0RGlyZWN0b3J5OiBzdHJpbmcsIHByb2plY3Q6IFByb2plY3RJbmZvKSB7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGF3YWl0IGZzLnJlYWRkaXIoc291cmNlRGlyZWN0b3J5KSkge1xuICAgICAgY29uc3QgZnJvbUZpbGUgPSBwYXRoLmpvaW4oc291cmNlRGlyZWN0b3J5LCBmaWxlKTtcbiAgICAgIGNvbnN0IHRvRmlsZSA9IHBhdGguam9pbih0YXJnZXREaXJlY3RvcnksIHRoaXMuZXhwYW5kKHVuZXNjYXBlKGZpbGUpLCBwcm9qZWN0KSk7XG4gICAgICBpZiAoKGF3YWl0IGZzLnN0YXQoZnJvbUZpbGUpKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRvRmlsZSk7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5zdGFsbEZpbGVzKGZyb21GaWxlLCB0b0ZpbGUsIHByb2plY3QpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsZS5tYXRjaCgvXi4qXFwudGVtcGxhdGVcXC5bXi5dKyQvKSkge1xuICAgICAgICBhd2FpdCB0aGlzLmluc3RhbGxQcm9jZXNzZWQoZnJvbUZpbGUsIHRvRmlsZS5yZXBsYWNlKC9cXC50ZW1wbGF0ZShcXC5bXi5dKykkLywgJyQxJyksIHByb2plY3QpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsZS5tYXRjaCgvXi4qXFwuaG9va1xcLihkLik/W14uXSskLykpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5pbnN0YWxsUHJvY2Vzc2VkKGZyb21GaWxlLCBwYXRoLmpvaW4odGFyZ2V0RGlyZWN0b3J5LCAndG1wJywgZmlsZSksIHByb2plY3QpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsZS5lbmRzV2l0aCgnLnRlbXBsYXRlJykpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5pbnN0YWxsUHJvY2Vzc2VkKGZyb21GaWxlLCB0b0ZpbGUuc3Vic3RyaW5nKDAsIHRvRmlsZS5sZW5ndGggLSA5KSwgcHJvamVjdCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgZnMuY29weShmcm9tRmlsZSwgdG9GaWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgICBJbnZva2UgYW55IGphdmFzY3JpcHQgaG9va3MgdGhhdCBleGlzdCBpbiB0aGUgdGVtcGxhdGUuXG4gICAqIEBkZXNjcmlwdGlvbiBTb21ldGltZXMgdGVtcGxhdGVzIG5lZWQgbW9yZSBjb21wbGV4IGxvZ2ljIHRoYW4ganVzdCByZXBsYWNpbmcgdG9rZW5zLiBBICdob29rJyBpc1xuICAgKiAgICAgICAgYW55IGZpbGUgdGhhdCBlbmRzIGluIC5ob29rLmpzLiBJdCBzaG91bGQgZXhwb3J0IGEgc2luZ2xlIGZ1bmN0aW9uIGNhbGxlZCBcImludm9rZVwiXG4gICAqICAgICAgICB0aGF0IGFjY2VwdHMgYSBzaW5nbGUgc3RyaW5nIHBhcmFtZXRlci4gV2hlbiB0aGUgdGVtcGxhdGUgaXMgaW5zdGFsbGVkLCBlYWNoIGhvb2tcbiAgICogICAgICAgIHdpbGwgYmUgaW52b2tlZCwgcGFzc2luZyB0aGUgdGFyZ2V0IGRpcmVjdG9yeSBhcyB0aGUgb25seSBhcmd1bWVudC4gSG9va3MgYXJlIGludm9rZWRcbiAgICogICAgICAgIGluIGxleGljYWwgb3JkZXIuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGludm9rZUhvb2tzKHNvdXJjZURpcmVjdG9yeTogc3RyaW5nLCB0YXJnZXREaXJlY3Rvcnk6IHN0cmluZykge1xuICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgZnMucmVhZGRpcihzb3VyY2VEaXJlY3RvcnkpO1xuICAgIGZpbGVzLnNvcnQoKTsgLy8gU29ydGluZyBhbGxvd3MgdGVtcGxhdGUgYXV0aG9ycyB0byBjb250cm9sIHRoZSBvcmRlciBpbiB3aGljaCBob29rcyBhcmUgaW52b2tlZC5cblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgaWYgKGZpbGUubWF0Y2goL14uKlxcLmhvb2tcXC5qcyQvKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuICAgICAgICBjb25zdCBpbnZva2U6IEludm9rZUhvb2sgPSByZXF1aXJlKHBhdGguam9pbihzb3VyY2VEaXJlY3RvcnksIGZpbGUpKS5pbnZva2U7XG4gICAgICAgIGF3YWl0IGludm9rZSh0YXJnZXREaXJlY3RvcnkpO1xuICAgICAgICBjb25zdCBpbnZva2VVbml0VGVzdDogSW52b2tlSG9vayA9IHJlcXVpcmUocGF0aC5qb2luKHNvdXJjZURpcmVjdG9yeSwgZmlsZSkpLmludm9rZVVuaXRUZXN0O1xuICAgICAgICBhd2FpdCBpbnZva2VVbml0VGVzdCh0YXJnZXREaXJlY3RvcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaW5zdGFsbFByb2Nlc3NlZCh0ZW1wbGF0ZVBhdGg6IHN0cmluZywgdG9GaWxlOiBzdHJpbmcsIHByb2plY3Q6IFByb2plY3RJbmZvKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBmcy5yZWFkRmlsZSh0ZW1wbGF0ZVBhdGgsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSk7XG4gICAgYXdhaXQgZnMud3JpdGVGaWxlKHRvRmlsZSwgdGhpcy5leHBhbmQodGVtcGxhdGUsIHByb2plY3QpKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhwYW5kKHRlbXBsYXRlOiBzdHJpbmcsIHByb2plY3Q6IFByb2plY3RJbmZvKSB7XG4gICAgY29uc3QgTUFUQ0hfVkVSX0JVSUxEID0gL1xcK1thLWYwLTldKyQvOyAvLyBNYXRjaGVzIFwiK0JVSUxEXCIgaW4gXCJ4Lnkuei1iZXRhK0JVSUxEXCJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuICAgIGNvbnN0IGNka1ZlcnNpb24gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uLnJlcGxhY2UoTUFUQ0hfVkVSX0JVSUxELCAnJyk7XG4gICAgcmV0dXJuIHRlbXBsYXRlXG4gICAgICAucmVwbGFjZSgvJW5hbWUlL2csIHByb2plY3QubmFtZSlcbiAgICAgIC5yZXBsYWNlKC8lbmFtZVxcLmNhbWVsQ2FzZWQlL2csIGNhbWVsQ2FzZShwcm9qZWN0Lm5hbWUpKVxuICAgICAgLnJlcGxhY2UoLyVuYW1lXFwuUGFzY2FsQ2FzZWQlL2csIGNhbWVsQ2FzZShwcm9qZWN0Lm5hbWUsIHsgcGFzY2FsQ2FzZTogdHJ1ZSB9KSlcbiAgICAgIC5yZXBsYWNlKC8lY2RrLXZlcnNpb24lL2csIGNka1ZlcnNpb24pXG4gICAgICAucmVwbGFjZSgvJWNkay1ob21lJS9nLCBjZGtIb21lRGlyKCkpXG4gICAgICAucmVwbGFjZSgvJW5hbWVcXC5QeXRob25Nb2R1bGUlL2csIHByb2plY3QubmFtZS5yZXBsYWNlKC8tL2csICdfJykpXG4gICAgICAucmVwbGFjZSgvJXB5dGhvbi1leGVjdXRhYmxlJS9nLCBweXRob25FeGVjdXRhYmxlKCkpXG4gICAgICAucmVwbGFjZSgvJW5hbWVcXC5TdGFja05hbWUlL2csIHByb2plY3QubmFtZS5yZXBsYWNlKC9bXkEtWmEtejAtOS1dL2csICctJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY29udGV4dCB2YXJpYWJsZXMgdG8gYGNkay5qc29uYCBpbiB0aGUgZ2VuZXJhdGVkIHByb2plY3QgZGlyZWN0b3J5IHRvXG4gICAqIGVuYWJsZSBmdXR1cmUgYmVoYXZpb3IgZm9yIG5ldyBwcm9qZWN0cy5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgYXBwbHlGdXR1cmVGbGFncyhwcm9qZWN0RGlyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjZGtKc29uID0gcGF0aC5qb2luKHByb2plY3REaXIsICdjZGsuanNvbicpO1xuICAgIGlmICghKGF3YWl0IGZzLnBhdGhFeGlzdHMoY2RrSnNvbikpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgZnMucmVhZEpzb24oY2RrSnNvbik7XG4gICAgY29uZmlnLmNvbnRleHQgPSB7XG4gICAgICAuLi5jb25maWcuY29udGV4dCxcbiAgICAgIC4uLmN4YXBpLkZVVFVSRV9GTEFHUyxcbiAgICB9O1xuXG4gICAgYXdhaXQgZnMud3JpdGVKc29uKGNka0pzb24sIGNvbmZpZywgeyBzcGFjZXM6IDIgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFByb2plY3RJbmZvIHtcbiAgLyoqIFRoZSB2YWx1ZSB1c2VkIGZvciAlbmFtZSUgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgYXZhaWxhYmxlSW5pdFRlbXBsYXRlczogUHJvbWlzZTxJbml0VGVtcGxhdGVbXT4gPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZU5hbWVzID0gYXdhaXQgbGlzdERpcmVjdG9yeShURU1QTEFURVNfRElSKTtcbiAgY29uc3QgdGVtcGxhdGVzID0gbmV3IEFycmF5PEluaXRUZW1wbGF0ZT4oKTtcbiAgZm9yIChjb25zdCB0ZW1wbGF0ZU5hbWUgb2YgdGVtcGxhdGVOYW1lcykge1xuICAgIHRlbXBsYXRlcy5wdXNoKGF3YWl0IEluaXRUZW1wbGF0ZS5mcm9tTmFtZSh0ZW1wbGF0ZU5hbWUpKTtcbiAgfVxuICByZXNvbHZlKHRlbXBsYXRlcyk7XG59KTtcbmV4cG9ydCBjb25zdCBhdmFpbGFibGVJbml0TGFuZ3VhZ2VzOiBQcm9taXNlPHN0cmluZ1tdPiA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlcyA9IGF3YWl0IGF2YWlsYWJsZUluaXRUZW1wbGF0ZXM7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRlbXBsYXRlcykge1xuICAgIGZvciAoY29uc3QgbGFuZ3VhZ2Ugb2YgdGVtcGxhdGUubGFuZ3VhZ2VzKSB7XG4gICAgICByZXN1bHQuYWRkKGxhbmd1YWdlKTtcbiAgICB9XG4gIH1cbiAgcmVzb2x2ZShbLi4ucmVzdWx0XSk7XG59KTtcbi8qKlxuICogQHBhcmFtIGRpclBhdGggaXMgdGhlIGRpcmVjdG9yeSB0byBiZSBsaXN0ZWQuXG4gKiBAcmV0dXJucyB0aGUgbGlzdCBvZiBmaWxlIG9yIGRpcmVjdG9yeSBuYW1lcyBjb250YWluZWQgaW4gYGBkaXJQYXRoYGAsIGV4Y2x1ZGluZyBhbnkgZG90LWZpbGUsIGFuZCBzb3J0ZWQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxpc3REaXJlY3RvcnkoZGlyUGF0aDogc3RyaW5nKSB7XG4gIHJldHVybiAoYXdhaXQgZnMucmVhZGRpcihkaXJQYXRoKSkuZmlsdGVyKChwKSA9PiAhcC5zdGFydHNXaXRoKCcuJykpLnNvcnQoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByaW50QXZhaWxhYmxlVGVtcGxhdGVzKGxhbmd1YWdlPzogc3RyaW5nKSB7XG4gIHByaW50KCdBdmFpbGFibGUgdGVtcGxhdGVzOicpO1xuICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIGF3YWl0IGF2YWlsYWJsZUluaXRUZW1wbGF0ZXMpIHtcbiAgICBpZiAobGFuZ3VhZ2UgJiYgdGVtcGxhdGUubGFuZ3VhZ2VzLmluZGV4T2YobGFuZ3VhZ2UpID09PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHByaW50KGAqICR7Y29sb3JzLmdyZWVuKHRlbXBsYXRlLm5hbWUpfTogJHt0ZW1wbGF0ZS5kZXNjcmlwdGlvbn1gKTtcbiAgICBjb25zdCBsYW5ndWFnZUFyZyA9IGxhbmd1YWdlXG4gICAgICA/IGNvbG9ycy5ib2xkKGxhbmd1YWdlKVxuICAgICAgOiB0ZW1wbGF0ZS5sYW5ndWFnZXMubGVuZ3RoID4gMVxuICAgICAgPyBgWyR7dGVtcGxhdGUubGFuZ3VhZ2VzLm1hcCgodCkgPT4gY29sb3JzLmJvbGQodCkpLmpvaW4oJ3wnKX1dYFxuICAgICAgOiBjb2xvcnMuYm9sZCh0ZW1wbGF0ZS5sYW5ndWFnZXNbMF0pO1xuICAgIHByaW50KGAgICDilJTilIAgJHtjb2xvcnMuYmx1ZShgY2RrIGluaXQgJHtjb2xvcnMuYm9sZCh0ZW1wbGF0ZS5uYW1lKX0gLS1sYW5ndWFnZT0ke2xhbmd1YWdlQXJnfWApfWApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVQcm9qZWN0KFxuICB0ZW1wbGF0ZTogSW5pdFRlbXBsYXRlLFxuICBsYW5ndWFnZTogc3RyaW5nLFxuICBjYW5Vc2VOZXR3b3JrOiBib29sZWFuLFxuICBnZW5lcmF0ZU9ubHk6IGJvb2xlYW4sXG4gIHdvcmtEaXI6IHN0cmluZyxcbikge1xuICBhd2FpdCBhc3NlcnRJc0VtcHR5RGlyZWN0b3J5KHdvcmtEaXIpO1xuXG4gIHByaW50KGBBcHBseWluZyBwcm9qZWN0IHRlbXBsYXRlICR7Y29sb3JzLmdyZWVuKHRlbXBsYXRlLm5hbWUpfSBmb3IgJHtjb2xvcnMuYmx1ZShsYW5ndWFnZSl9YCk7XG4gIGF3YWl0IHRlbXBsYXRlLmluc3RhbGwobGFuZ3VhZ2UsIHdvcmtEaXIpO1xuICBpZiAoYXdhaXQgZnMucGF0aEV4aXN0cygnUkVBRE1FLm1kJykpIHtcbiAgICBwcmludChjb2xvcnMuZ3JlZW4oYXdhaXQgZnMucmVhZEZpbGUoJ1JFQURNRS5tZCcsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSkpKTtcbiAgfVxuXG4gIGlmICghZ2VuZXJhdGVPbmx5KSB7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZUdpdFJlcG9zaXRvcnkod29ya0Rpcik7XG4gICAgYXdhaXQgcG9zdEluc3RhbGwobGFuZ3VhZ2UsIGNhblVzZU5ldHdvcmssIHdvcmtEaXIpO1xuICB9XG5cbiAgcHJpbnQoJ+KchSBBbGwgZG9uZSEnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXNzZXJ0SXNFbXB0eURpcmVjdG9yeSh3b3JrRGlyOiBzdHJpbmcpIHtcbiAgY29uc3QgZmlsZXMgPSBhd2FpdCBmcy5yZWFkZGlyKHdvcmtEaXIpO1xuICBpZiAoZmlsZXMuZmlsdGVyKChmKSA9PiAhZi5zdGFydHNXaXRoKCcuJykpLmxlbmd0aCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYHJvcyBpbml0YCBjYW5ub3QgYmUgcnVuIGluIGEgbm9uLWVtcHR5IGRpcmVjdG9yeSEnKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplR2l0UmVwb3NpdG9yeSh3b3JrRGlyOiBzdHJpbmcpIHtcbiAgaWYgKGF3YWl0IGlzSW5HaXRSZXBvc2l0b3J5KHdvcmtEaXIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHByaW50KCdJbml0aWFsaXppbmcgYSBuZXcgZ2l0IHJlcG9zaXRvcnkuLi4nKTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBleGVjdXRlKCdnaXQnLCBbJ2luaXQnXSwgeyBjd2Q6IHdvcmtEaXIgfSk7XG4gICAgYXdhaXQgZXhlY3V0ZSgnZ2l0JywgWydhZGQnLCAnLiddLCB7IGN3ZDogd29ya0RpciB9KTtcbiAgICBhd2FpdCBleGVjdXRlKCdnaXQnLCBbJ2NvbW1pdCcsICctLW1lc3NhZ2U9XCJJbml0aWFsIGNvbW1pdFwiJywgJy0tbm8tZ3BnLXNpZ24nXSwgeyBjd2Q6IHdvcmtEaXIgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3YXJuaW5nKCdVbmFibGUgdG8gaW5pdGlhbGl6ZSBnaXQgcmVwb3NpdG9yeSBmb3IgeW91ciBwcm9qZWN0LicpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RJbnN0YWxsKGxhbmd1YWdlOiBzdHJpbmcsIGNhblVzZU5ldHdvcms6IGJvb2xlYW4sIHdvcmtEaXI6IHN0cmluZykge1xuICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgY2FzZSAnamF2YXNjcmlwdCc6XG4gICAgICByZXR1cm4gYXdhaXQgcG9zdEluc3RhbGxKYXZhc2NyaXB0KGNhblVzZU5ldHdvcmssIHdvcmtEaXIpO1xuICAgIGNhc2UgJ3R5cGVzY3JpcHQnOlxuICAgICAgcmV0dXJuIGF3YWl0IHBvc3RJbnN0YWxsVHlwZXNjcmlwdChjYW5Vc2VOZXR3b3JrLCB3b3JrRGlyKTtcbiAgICBjYXNlICdqYXZhJzpcbiAgICAgIHJldHVybiBhd2FpdCBwb3N0SW5zdGFsbEphdmEoY2FuVXNlTmV0d29yaywgd29ya0Rpcik7XG4gICAgY2FzZSAncHl0aG9uJzpcbiAgICAgIHJldHVybiBhd2FpdCBwb3N0SW5zdGFsbFB5dGhvbih3b3JrRGlyKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwb3N0SW5zdGFsbEphdmFzY3JpcHQoY2FuVXNlTmV0d29yazogYm9vbGVhbiwgY3dkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHBvc3RJbnN0YWxsVHlwZXNjcmlwdChjYW5Vc2VOZXR3b3JrLCBjd2QpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwb3N0SW5zdGFsbFR5cGVzY3JpcHQoY2FuVXNlTmV0d29yazogYm9vbGVhbiwgY3dkOiBzdHJpbmcpIHtcbiAgY29uc3QgY29tbWFuZCA9ICducG0nO1xuXG4gIGlmICghY2FuVXNlTmV0d29yaykge1xuICAgIHdhcm5pbmcoYFBsZWFzZSBydW4gJyR7Y29tbWFuZH0gaW5zdGFsbCchYCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpbnQoYEV4ZWN1dGluZyAke2NvbG9ycy5ncmVlbihgJHtjb21tYW5kfSBpbnN0YWxsYCl9Li4uYCk7XG4gIHRyeSB7XG4gICAgYXdhaXQgZXhlY3V0ZShjb21tYW5kLCBbJ2luc3RhbGwnXSwgeyBjd2QgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3YXJuaW5nKGAke2NvbW1hbmR9IGluc3RhbGwgZmFpbGVkOiBgICsgZS5tZXNzYWdlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwb3N0SW5zdGFsbEphdmEoY2FuVXNlTmV0d29yazogYm9vbGVhbiwgY3dkOiBzdHJpbmcpIHtcbiAgY29uc3QgbXZuUGFja2FnZVdhcm5pbmcgPSBcIlBsZWFzZSBydW4gJ212biBwYWNrYWdlJyFcIjtcbiAgaWYgKCFjYW5Vc2VOZXR3b3JrKSB7XG4gICAgd2FybmluZyhtdm5QYWNrYWdlV2FybmluZyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpbnQoXCJFeGVjdXRpbmcgJ212biBwYWNrYWdlJ1wiKTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBleGVjdXRlKCdtdm4nLCBbJ3BhY2thZ2UnXSwgeyBjd2QgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3YXJuaW5nKCdVbmFibGUgdG8gcGFja2FnZSBjb21waWxlZCBjb2RlIGFzIEpBUicpO1xuICAgIHdhcm5pbmcobXZuUGFja2FnZVdhcm5pbmcpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RJbnN0YWxsUHl0aG9uKGN3ZDogc3RyaW5nKSB7XG4gIGNvbnN0IHB5dGhvbiA9IHB5dGhvbkV4ZWN1dGFibGUoKTtcbiAgd2FybmluZyhgUGxlYXNlIHJ1biAke3B5dGhvbn0gLW0gdmVudiAuZW52JyFgKTtcbiAgcHJpbnQoYEV4ZWN1dGluZyAke2NvbG9ycy5ncmVlbignQ3JlYXRpbmcgdmlydHVhbGVudi4uLicpfWApO1xuICB0cnkge1xuICAgIGF3YWl0IGV4ZWN1dGUocHl0aG9uLCBbJy1tIHZlbnYnLCAnLmVudiddLCB7IGN3ZCB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHdhcm5pbmcoJ1VuYWJsZSB0byBjcmVhdGUgdmlydHVhbGVudiBhdXRvbWF0aWNhbGx5Jyk7XG4gICAgd2FybmluZyhgUGxlYXNlIHJ1biAnJHtweXRob259IC1tIHZlbnYgLmVudichYCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gZGlyIGEgZGlyZWN0b3J5IHRvIGJlIGNoZWNrZWRcbiAqIEByZXR1cm5zIHRydWUgaWYgYGBkaXJgYCBpcyB3aXRoaW4gYSBnaXQgcmVwb3NpdG9yeS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaXNJbkdpdFJlcG9zaXRvcnkoZGlyOiBzdHJpbmcpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAoYXdhaXQgZnMucGF0aEV4aXN0cyhwYXRoLmpvaW4oZGlyLCAnLmdpdCcpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChpc1Jvb3QoZGlyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBkaXIgPSBwYXRoLmRpcm5hbWUoZGlyKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSBkaXIgYSBkaXJlY3RvcnkgdG8gYmUgY2hlY2tlZC5cbiAqIEByZXR1cm5zIHRydWUgaWYgYGBkaXJgYCBpcyB0aGUgcm9vdCBvZiBhIGZpbGVzeXN0ZW0uXG4gKi9cbmZ1bmN0aW9uIGlzUm9vdChkaXI6IHN0cmluZykge1xuICByZXR1cm4gcGF0aC5kaXJuYW1lKGRpcikgPT09IGRpcjtcbn1cblxuLyoqXG4gKiBFeGVjdXRlcyBgY29tbWFuZGAuIFNUREVSUiBpcyBlbWl0dGVkIGluIHJlYWwtdGltZS5cbiAqXG4gKiBJZiBjb21tYW5kIGV4aXRzIHdpdGggbm9uLXplcm8gZXhpdCBjb2RlLCBhbiBleGNlcHJpb24gaXMgdGhyb3duIGFuZCBpbmNsdWRlc1xuICogdGhlIGNvbnRlbnRzIG9mIFNURE9VVC5cbiAqXG4gKiBAcmV0dXJucyBTVERPVVQgKGlmIHN1Y2Nlc3NmdWwpLlxuICovXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlKGNtZDogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSwgeyBjd2QgfTogeyBjd2Q6IHN0cmluZyB9KSB7XG4gIGNvbnN0IGNoaWxkID0gY2hpbGRQcm9jZXNzLnNwYXduKGNtZCwgYXJncywgeyBjd2QsIHNoZWxsOiB0cnVlLCBzdGRpbzogWydpZ25vcmUnLCAncGlwZScsICdpbmhlcml0J10gfSk7XG4gIGxldCBzdGRvdXQgPSAnJztcbiAgY2hpbGQuc3Rkb3V0Lm9uKCdkYXRhJywgKGNodW5rKSA9PiAoc3Rkb3V0ICs9IGNodW5rLnRvU3RyaW5nKCkpKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKG9rLCBmYWlsKSA9PiB7XG4gICAgY2hpbGQub25jZSgnZXJyb3InLCAoZXJyKSA9PiBmYWlsKGVycikpO1xuICAgIGNoaWxkLm9uY2UoJ2V4aXQnLCAoc3RhdHVzKSA9PiB7XG4gICAgICBpZiAoc3RhdHVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvayhzdGRvdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoc3Rkb3V0KTtcbiAgICAgICAgcmV0dXJuIGZhaWwobmV3IEVycm9yKGAke2NtZH0gZXhpdGVkIHdpdGggc3RhdHVzICR7c3RhdHVzfWApKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbiJdfQ==