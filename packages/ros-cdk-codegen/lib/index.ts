import * as rosSpec from '@alicloud/ros-cdk-spec';
import * as fs from 'fs-extra';
import CodeGenerator, { CodeGeneratorOptions } from './codegen';
import ResourceCodeGenerator, {ExtensionCodeGenerator, ResourceCodeGeneratorOptions} from './resource-codegen';
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
  let aliyunResourceTypesArray = new Array();
  // 优先处理ALIYUN开头的资源类型（需要创建资源类型对应的根目录）
  for (const scope of scopes) {
    if (scope.startsWith('ALIYUN')) {
      const spec = rosSpec.filteredSpecification((s) => s.startsWith(`${scope}::`));
      const originalResourceName = scope.split('::')[1]
      const dataSourceResourceName = 'DATASOURCE::' + originalResourceName
      let hasDataSource = false
      if (scopes.indexOf(dataSourceResourceName) !== -1) {
        hasDataSource = true
      }
      if (Object.keys(spec.ResourceTypes).length === 0) {
        throw new Error(`No resource was found for scope ${scope}`);
      }
      // name: package/module name (the folder name)
      const moduleName = `${packageName(scope)}`;
      // rosResourceFileName: the xxx.generated.ts
      const rosResourceFileName = `${moduleName}${rosResourceName}`;
      const affix = computeAffix(scope, scopes);
      const scopePath = `${outPath}/ros-cdk-${moduleName}/lib`;
      // fs.mkdirp(scopePath);
      const generator = new CodeGenerator(rosResourceFileName, spec, affix, options);
      await generator.emitCode(Object.keys(spec.ResourceTypes));
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
        await resourceGenerator.emitCode(resourceName);
        await resourceGenerator.save(scopePath);
      }

      // create index.ts
      const indexGenerator = new IndexCodeGenerator(moduleName, fileNames, scope);
      await indexGenerator.emitCode(hasDataSource);
      await indexGenerator.save(scopePath);
      aliyunResourceTypesArray.push(originalResourceName)
    }
  }
  // 处理DATASOURCE开头的资源类型
  for (const scope of scopes) {
    if (scope.startsWith('DATASOURCE')) {
      const dataSourceResourceName = scope.split('::')[1]
      // 处理只有Datasource没有Aliyun这类的资源类型
      if (aliyunResourceTypesArray.indexOf(dataSourceResourceName) !== -1) {
        // 处理DATASOURCE::EIP::Addresses 这个原属于VPC的特殊资源，不再创建资源根目录
        if (scope === 'DATASOURCE::EIP' || scope === 'DATASOURCE::Eipanycast') {
          continue
        }
        const dataSourceSpec = rosSpec.filteredSpecification((s) => s.startsWith(`${scope}::`));
        const cloudProductResourceName = scope.split('::')[1]
        let dataSourceResourceTypes: string[] = new Array();
        dataSourceResourceTypes = Object.keys(dataSourceSpec.ResourceTypes)
        // 处理DATASOURCE::EIP::Addresses 这个原属于VPC的特殊资源，添加到VPC所属资源目录
        if (cloudProductResourceName === 'VPC') {
          if (scopes.indexOf('DATASOURCE::EIP') !== -1) {
            const datasourceEipResourceSpec = rosSpec.filteredSpecification((s) => s.startsWith('DATASOURCE::EIP::'));
            dataSourceResourceTypes = dataSourceResourceTypes.concat(Object.keys(datasourceEipResourceSpec.ResourceTypes))
          }
          if (scopes.indexOf('DATASOURCE::Eipanycast') !== -1) {
            const datasourceEipanycastResourceSpec = rosSpec.filteredSpecification((s) => s.startsWith('DATASOURCE::Eipanycast::'));
            dataSourceResourceTypes = dataSourceResourceTypes.concat(Object.keys(datasourceEipanycastResourceSpec.ResourceTypes))
          }
        }

        if (dataSourceResourceTypes.length === 0) {
          throw new Error(`No resource was found for scope ${scope}`);
        }
        // name: package/module name (the folder name)
        const moduleName = `${packageName(scope)}`;
        // rosDataSourceResourceFileName: the xxx.generated.ts
        const rosDataSourceResourceFileName = `${moduleName}${rosResourceName}`;
        const affix = computeAffix(scope, scopes);
        const scopePath = `${outPath}/ros-cdk-${moduleName}/lib/datasource`;
        // fs.mkdirp(scopePath);
        const generator = new CodeGenerator(rosDataSourceResourceFileName, dataSourceSpec, affix, options);
        await generator.emitCode(dataSourceResourceTypes);
        await generator.save(scopePath);

        // for every specification create datasource resource class file
        // e.g. vpc.ts
        let fileNames: string[] = new Array();
        for (const resourceName of dataSourceResourceTypes.sort()) {
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
          await resourceGenerator.emitCode(resourceName);
          await resourceGenerator.save(scopePath);
        }

        // create index.ts
        const indexGenerator = new IndexCodeGenerator(moduleName, fileNames, scope);
        await indexGenerator.emitCode(false);
        await indexGenerator.save(scopePath);
      }
    }
  }
  const extensionGenerator = new ExtensionCodeGenerator();
  await extensionGenerator.emitCode(outPath);
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
