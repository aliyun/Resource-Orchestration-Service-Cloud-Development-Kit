import * as rosSpec from '@ros-cdk/ros-spec';
import * as fs from 'fs-extra';
import CodeGenerator, { CodeGeneratorOptions } from './codegen';
import ResourceCodeGenerator, { ResourceCodeGeneratorOptions } from './resource-codegen';
import { packageName } from './genspec';
import IndexCodeGenerator from './index-codegen';

const rosResourceName = '.generated.ts';

export default async function (
  scopes: string | string[],
  outPath: string,
  options: CodeGeneratorOptions = {},
): Promise<void> {
  if (outPath !== '.' && !fs.existsSync(outPath)) {
    await fs.mkdirp(outPath);
  }
  if (typeof scopes === 'string') {
    scopes = [scopes];
  }

  for (const scope of scopes) {
    const spec = rosSpec.filteredSpecification((s) => s.startsWith(`${scope}::`));

    if (Object.keys(spec.ResourceTypes).length === 0) {
      throw new Error(`No resource was found for scope ${scope}`);
    }
    // name: package/module name (the folder name)
    const moduleName = `${packageName(scope)}`;
    // rosResourceFileName: the xxx.generated.ts
    const rosResourceFileName = `${moduleName}${rosResourceName}`;
    const affix = computeAffix(scope, scopes);
    const scopePath = `${outPath}/${moduleName}/lib`;
    // fs.mkdirp(scopePath);
    const generator = new CodeGenerator(rosResourceFileName, spec, affix, options);
    generator.emitCode();
    await generator.save(scopePath);

    // for every specification create resource class file
    // e.g. vpc.ts
    let fileNames: string[] = new Array();
    for (const resourceName of Object.keys(spec.ResourceTypes).sort()) {
      const resourceSpec = rosSpec.filteredSpecification((s) => s.startsWith(`${resourceName}`));
      let fileName = resourceName.split('::')[2].toLowerCase();
      fileName = fileName === 'index' ? 'index-resource' : fileName;
      fileNames.push(fileName);
      const resourceGenerator = new ResourceCodeGenerator(
        `${fileName}.ts`,
        resourceSpec,
        '',
        options as ResourceCodeGeneratorOptions,
      );
      resourceGenerator.emitCode(resourceName);
      resourceGenerator.save(scopePath);
    }

    // create index.ts
    const indexGenerator = new IndexCodeGenerator(moduleName, fileNames, scope);
    indexGenerator.emitCode();
    indexGenerator.save(scopePath);
  }
}

/**
 * Finds an affix for class names generated for a scope, given all the scopes that share the same package.
 * @param scope     the scope for which an affix is needed (e.g: ALIYUN::ApiGatewayV2)
 * @param allScopes all the scopes hosted in the package (e.g: ["ALIYUN::ApiGateway", "ALIYUN::ApiGatewayV2"])
 * @returns the affix (e.g: "V2"), if any, or an empty string.
 */
function computeAffix(scope: string, allScopes: string[]): string {
  if (allScopes.length === 1) {
    return '';
  }
  const parts = scope.match(/^(.+)(V\d+)$/);
  if (!parts) {
    return '';
  }
  const [, root, version] = parts;
  if (allScopes.indexOf(root) !== -1) {
    return version;
  }
  return '';
}
