import { CodeMaker } from 'codemaker';

export default class IndexCodeGenerator {
  public readonly outputFile: string;
  public readonly moduleName: string;
  public readonly fileNames: string[];
  public readonly typeName: string;
  private code = new CodeMaker();

  /**
   * Creates the index generator.
   * @param moduleName the name of the module (used to determine the file name).
   * @param fileNames  the names of all the created class
   * @param typeName   the module name in specification
   */
  constructor(moduleName: string, fileNames: string[], typeName: string) {
    this.outputFile = 'index.ts';
    this.moduleName = moduleName;
    this.fileNames = fileNames;
    this.typeName = typeName;
    this.code.openFile(this.outputFile);
  }

  public async emitCode(hasDataSource: boolean) {
    for (let fileName of this.fileNames) {
      this.code.line(`export * from './${fileName}';`);
    }
    this.code.line();
    this.code.line(`// ${this.typeName} Resources:`);
    this.code.line(`export * from './${this.moduleName}.generated';`);
    if (hasDataSource) {
      this.code.line(`export * as datasource from './datasource';`);
    }
  }

  /**
   * Saves the generated file.
   */
  public async save(dir: string): Promise<string[]> {
    this.code.closeFile(this.outputFile);
    return await this.code.save(dir);
  }
}
