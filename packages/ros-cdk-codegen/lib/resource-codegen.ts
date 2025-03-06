import { schema } from '@alicloud/ros-cdk-spec';
import { CodeMaker } from 'codemaker';
import * as genspec from './genspec';
import { itemTypeNames, scalarTypeNames, SpecName } from './spec-utils';
import { upcaseFirst } from './util';
import * as fs from "fs-extra";
import * as path from "path";
import * as util from "./util";

const CORE = genspec.CORE_NAMESPACE;
const RESOURCE_CLASS_PREFIX = genspec.RESOURCE_CLASS_PREFIX;
const RESOURCE_BASE_CLASS = `${CORE}.Resource`; // base class for all resources
const CONSTRUCT_CLASS = `${CORE}.Construct`;
const TAG_MANAGER = `${CORE}.TagManager`;

interface Dictionary<T> {
  [key: string]: T;
}

export interface ResourceCodeGeneratorOptions {
  /**
   * How to import the core library.
   *
   * @default '@alicloud/ros-cdk-core'
   */
  readonly coreImport?: string;
}

/**
 * Emits classes for all resource types
 */
export default class ResourceCodeGenerator {
  public readonly outputFile: string;

  private code = new CodeMaker();

  /**
   * Creates the code generator.
   * @param moduleName the name of the module (used to determine the file name).
   * @param spec resource specification
   */
  constructor(
    moduleName: string,
    private readonly spec: schema.Specification,
    private readonly affix: string,
    options: ResourceCodeGeneratorOptions = {},
  ) {
    this.outputFile = `${moduleName}`;
    this.code.openFile(this.outputFile);
    const coreImport = options.coreImport ?? '@alicloud/ros-cdk-core';
    this.code.line(`import * as ${CORE} from '${coreImport}';`);
  }

  public async emitCode(resourceName: string) {
    // SpecName { module: 'ALIYUN::ECS', resourceName: 'VPC' }
    // CodeName {
    //     packageName: 'ecs',
    //     namespace: '',
    //     className: 'VPC',
    //     specName: SpecName { module: 'ALIYUN::ECS', resourceName: 'VPC' },
    //     methodName: undefined
    // }
    const resourceSpec = this.spec.ResourceTypes[resourceName];
    const rosName = SpecName.parse(resourceName);
    const rosReourceName = genspec.CodeName.forRosResource(rosName, this.affix);
    const resourceCodeName = genspec.CodeName.forResource(rosName, this.affix);
    if (resourceCodeName.packageName === 'eip' || resourceCodeName.packageName === 'eipanycast') {
      // 处理DATASOURCE::EIP::Addresses 这个原属于VPC的特殊资源
      this.code.line(
          `import { ${RESOURCE_CLASS_PREFIX}${rosName.resourceName} } from './vpc.generated';`,
      );
    } else
    {
      this.code.line(
          `import { ${RESOURCE_CLASS_PREFIX}${rosName.resourceName} } from './${resourceCodeName.packageName}.generated';`,
      );
    }
    this.code.line('// Generated from the AliCloud ROS Resource Specification');
    this.code.line(`export { ${RESOURCE_CLASS_PREFIX}${rosName.resourceName} as ${rosName.resourceName}Property };`);
    this.code.line();
    this.emitResourceType(resourceCodeName, rosReourceName, resourceSpec);
  }

  /**
   * Saves the generated file.
   */
  public async save(dir: string): Promise<string[]> {
    this.code.closeFile(this.outputFile);
    return await this.code.save(dir);
  }

  private openClass(name: genspec.CodeName, superClasses?: string, superInterfaces?: string): string {
    const extendsPostfix = superClasses ? ` extends ${superClasses}` : '';
    const implementsPostfix = superInterfaces ? ` implements ${superInterfaces}` : '';

    // handle special case whose letters are all capital, like VPC
    // in jsii type name must be CamelCased.
    let className: string = name.className;
    if(!/[a-z]/.test(className)) {
      let lowClassName: string = className.toLowerCase();
      className = lowClassName.charAt(0).toUpperCase() + lowClassName.substring(1);
    }
    this.code.openBlock(`export class ${className}${extendsPostfix}${implementsPostfix}`);
    return name.className;
  }

  private emitPropsType(
    resourceContext: genspec.CodeName,
    rosResourceContext: genspec.CodeName,
    spec: schema.ResourceType,
  ): genspec.CodeName | undefined {
    if (!spec.Properties) {
      return;
    }
    const name = genspec.CodeName.forResourceProperties(resourceContext);

    this.docLink(spec.Documentation, `Properties for defining a \`${resourceContext.className}\`. `);
    this.code.openBlock(`export interface ${name.className}`);
    this.emitPropsTypeProperties(rosResourceContext, spec.Properties, Container.Interface);

    this.code.closeBlock();

    return name;
  }

  /**
   * Emit TypeScript for each of the properties, while renaming
   *
   * Return a mapping of { originalName -> newName }.
   */
  private emitPropsTypeProperties(
    resource: genspec.CodeName,
    propertiesSpec: { [name: string]: schema.Property },
    container: Container,
  ): Dictionary<string> {
    const propertyMap: Dictionary<string> = {};
    Object.keys(propertiesSpec)
      .sort(propertyComparator)
      .forEach((propName) => {
        this.code.line();
        const propSpec = propertiesSpec[propName];
        const additionalDocs = resource.specName!.relativeName(propName).fqn;

        propertyMap[propName] = this.emitProperty(
          {
            context: resource,
            propName,
            spec: propSpec,
            additionalDocs: quoteCode(additionalDocs),
          },
          container,
        );
      });

    return propertyMap;

    /**
     * A comparator that places required properties before optional properties,
     * and sorts properties alphabetically.
     * @param l the left property name.
     * @param r the right property name.
     */
    function propertyComparator(l: string, r: string): number {
      const lp = propertiesSpec[l];
      const rp = propertiesSpec[r];
      if (lp.Required === rp.Required) {
        return l.localeCompare(r);
      } else if (lp.Required) {
        return -1;
      }
      return 1;
    }
  }

  private emitResourceInterface(
      resourceContext: genspec.CodeName,
      propsType: genspec.CodeName | undefined,
      spec: schema.ResourceType,
  ): genspec.CodeName {
    const name = genspec.CodeName.forResourceInterface(resourceContext);

    this.docLink(undefined, `Represents a \`${resourceContext.className}\`. `);
    this.code.openBlock(`export interface ${name.className} extends ros.IResource`);

    if (propsType) {
      this.code.line(`readonly props: ${propsType.className};`);
    }

    if (spec.Attributes) {
      for (const attributeName of Object.keys(spec.Attributes).sort()) {
        if (
            !(attributeName[0] >= 'a' && attributeName[0] <= 'z') &&
            !(attributeName[0] >= 'A' && attributeName[0] <= 'Z')
        )
          continue;
        const attributeSpec = spec.Attributes![attributeName];

        this.code.line();

        this.docLink(undefined, `Attribute ${attributeName}: ${(attributeSpec as schema.Description).Description}`);
        const attr = genspec.attributeDefinition(attributeName);

        this.code.line(`readonly ${attr.propertyName}: ${CORE}.IResolvable | string;`);
      }
    }

    this.code.closeBlock();

    return name;
  }

  private emitResourceType(
    resourceName: genspec.CodeName,
    rosResourceName: genspec.CodeName,
    spec: schema.ResourceType,
  ): void {
    this.beginNamespace(resourceName);

    const rosName = resourceName.specName!.fqn;

    //
    // Props Bag for this Resource
    //
    const propsType = this.emitPropsType(resourceName, rosResourceName, spec);
    if (propsType) {
      this.code.line();
    }

    //
    // Interface for this Resource
    //
    const interfaceName = this.emitResourceInterface(resourceName, propsType, spec);

    //
    // The class declaration representing this Resource
    //

    let specificDescription = `This class encapsulates and extends the ROS resource type \`${rosName}\`.`;
    if (spec.Description) {
      specificDescription = `${specificDescription.replace('.', spec.Description.replace(rosName, ', which'))}`;
    }
    const note = `@Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of \`Ros${resourceName.className}\`for a more convenient development experience.`;
    this.docLink(spec.Documentation, specificDescription, note);
    this.openClass(resourceName, RESOURCE_BASE_CLASS, interfaceName.className);
    this.code.line(`protected scope: ros.Construct;`);
    this.code.line(`protected id: string;`);
    if (propsType) {
      this.code.line(`public readonly props: ${propsType.className};`);
    }
    this.code.line(`protected enableResourcePropertyConstraint: boolean;`);

    //
    // Attributes
    //

    const attributes = new Array<genspec.Attribute>();

    if (spec.Attributes) {
      for (const attributeName of Object.keys(spec.Attributes).sort()) {
        if (
          !(attributeName[0] >= 'a' && attributeName[0] <= 'z') &&
          !(attributeName[0] >= 'A' && attributeName[0] <= 'Z')
        )
          continue;
        const attributeSpec = spec.Attributes![attributeName];

        this.code.line();

        this.docLink(undefined, `Attribute ${attributeName}: ${(attributeSpec as schema.Description).Description}`);
        const attr = genspec.attributeDefinition(attributeName);

        this.code.line(`public readonly ${attr.propertyName}: ${CORE}.IResolvable | string;`);
        attributes.push(attr);
      }
    }

    //
    // Constructor
    //

    this.code.line();
    this.code.line('/**');
    this.code.line(' * Param scope - scope in which this resource is defined');
    this.code.line(' * Param id    - scoped id of the resource');
    this.code.line(' * Param props - resource properties');
    this.code.line(' */');
    const optionalProps = spec.Properties && !Object.values(spec.Properties).some((p) => p.Required || false);
    const propsArgument = propsType ? `, props: ${propsType.className}${optionalProps ? ' = {}' : ''}` : '';
    this.code.openBlock(
      `constructor(scope: ${CONSTRUCT_CLASS}, id: string${propsArgument}, enableResourcePropertyConstraint:boolean = true)`,
    );
    this.code.line(`super(scope, id);`);
    this.code.line(`this.scope = scope;`);
    this.code.line(`this.id = id;`);
    if (propsType) {
      this.code.line(`this.props = props;`);
    }
    this.code.line(`this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;`);

    // initialize all property class members
    if (propsType) {
      this.code.line();
      this.code.openBlock(`const ${CORE}${resourceName.className} = new ${rosResourceName.className}(this, id, `);
      if (spec.Properties) {
        for (const propName of Object.keys(spec.Properties)) {
          const prop = spec.Properties[propName];
          const propCodeName = genspec.rosTemplateToScriptName(propName);

          if (schema.isTagPropertyName(upcaseFirst(propCodeName)) && schema.isTaggableResource(spec)) {
            this.code.line(`tags: ${CORE}.tagFactory(props.${propCodeName}),`);
          } else {
            let codeDefault: string = '';
            if (typeof prop.Default === 'number' || typeof prop.Default === 'boolean') {
              codeDefault = ` === undefined || props.${propCodeName} === null ? ${prop.Default} : props.${propCodeName}`;
            } else if (typeof prop.Default === 'string') {
              codeDefault = ` === undefined || props.${propCodeName} === null ? '${prop.Default}' : props.${propCodeName}`;
            }
            this.code.line(`${propCodeName}: props.${propCodeName}${codeDefault},`);
          }
        }
      }
      this.code.closeBlockFormatter = (s) => `}${s}`;
      this.code.closeBlock(`, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);`);
      if (spec.Properties && Object.keys(spec.Properties).length === 0) {
        this.code.line(`props;`);
      }
    }
    this.code.line(`this.resource = ${CORE}${resourceName.className};`);
    // initialize all attribute properties
    for (const at of attributes) {
      // this.code.line(`this.${at.propertyName} = this.getResourceNameAttribute(${rosResourceName}.${at.propertyName});`);
      this.code.line(`this.${at.propertyName} = ${CORE}${resourceName.className}.${at.propertyName};`);
    }
    this.code.closeBlockFormatter = () => `}`;
    this.code.closeBlock();
    this.code.closeBlock();
  }

  private emitInterfaceProperty(props: EmitPropertyProps): string {
    const javascriptPropertyName = genspec.rosTemplateToScriptName(props.propName);

    this.docLink(
      undefined,
      `Property ${javascriptPropertyName}: ${props.spec.Description?.replace(new RegExp('\n', 'gm'), '\n     * ').replace(new RegExp('/', 'gm'), '\\/')}`,
    );
    const line =
      props.propName === 'Tags' && (props.spec as schema.ComplexListProperty).ItemType === 'Tag'
        ? ': { [key: string]: any }[];'
        : `: ${this.findNativeType(props.context, props.spec, props.propName)};`;
    const question = props.spec.Required ? '' : '?';
    this.code.line(`readonly ${javascriptPropertyName}${question}${line}`);

    return javascriptPropertyName;
  }

  private emitClassProperty(props: EmitPropertyProps): string {
    const javascriptPropertyName = genspec.rosTemplateToScriptName(props.propName);
    this.docLink(props.spec.Documentation, props.additionalDocs);
    const question = props.spec.Required ? ';' : ' | undefined;';
    const line = `: ${`${this.findNativeType(props.context, props.spec, props.propName)}`}${question}`;
    if (schema.isTagPropertyName(props.propName) && schema.isTagProperty(props.spec)) {
      this.code.line(`public readonly tags: ${TAG_MANAGER};`);
    } else {
      this.code.line(`public ${javascriptPropertyName}${line}`);
    }

    return javascriptPropertyName;
  }

  private emitProperty(props: EmitPropertyProps, container: Container): string {
    switch (container) {
      case Container.Class:
        return this.emitClassProperty(props);
      case Container.Interface:
        return this.emitInterfaceProperty(props);
      default:
        throw new Error(`Unsupported container ${container}`);
    }
  }

  private beginNamespace(type: genspec.CodeName): void {
    if (type.namespace) {
      const parts = type.namespace.split('.');
      for (const part of parts) {
        this.code.openBlock(`export namespace ${part}`);
      }
    }
  }

  /**
   * Return the native type expression for the given propSpec
   */
  private findNativeType(resourceContext: genspec.CodeName, propSpec: schema.Property, propName?: string): string {
    // switch (propSpec.Type) {
    //   case 'list':
    //     return `Array<any>`;
    //   case 'map':
    //     return `{ [key: string]: any }`;
    //   case 'integer':
    //   case 'number':
    //     return 'number';
    //   default:
    //     return `${propSpec.Type}`;
    // }
    const alternatives: string[] = [];

    // render the union of all item types
    if (schema.isCollectionProperty(propSpec)) {
      // render the union of all item types
      const itemTypes = genspec.specTypesToCodeTypes(resourceContext, itemTypeNames(propSpec));

      // 'tokenizableType' operates at the level of rendered type names in TypeScript, so stringify
      // the objects.
      const renderedTypes = itemTypes.map((t) => this.renderCodeName(resourceContext, t));
      if (!tokenizableType(renderedTypes) && !schema.isTagPropertyName(propName)) {
        // Always accept a token in place of any list element (unless the list elements are tokenizable)
        itemTypes.push(genspec.TOKEN_NAME);
      }

      const union = this.renderTypeUnion(resourceContext, itemTypes);

      if (schema.isMapProperty(propSpec)) {
        alternatives.push(`{ [key: string]: (${union}) }`);
      } else if (schema.isListProperty(propSpec) &&
          (propSpec as schema.PrimitiveListProperty).PrimitiveItemType === schema.PrimitiveType.AnyDict) {
        alternatives.push(`Array<{ [key: string]: any }>`);
      } else {
        // To make TSLint happy, we have to either emit: SingleType[] or Array<Alt1 | Alt2>
        if (union.indexOf('|') !== -1) {
          alternatives.push(`Array<${union}>`);
        } else {
          alternatives.push(`${union}[]`);
        }
      }
    }

    // Yes, some types can be both collection and scalar. Looking at you, SAM.
    if (schema.isScalarProperty(propSpec)) {
      // Scalar type
      const typeNames = scalarTypeNames(propSpec);
      const types = genspec.specTypesToCodeTypes(resourceContext, typeNames);
      alternatives.push(this.renderTypeUnion(resourceContext, types));
    }

    // Only if this property is not of a "tokenizable type" (string, string[],
    // number in the future) we add a type union for `cdk.Token`. We rather
    // everything to be tokenizable because there are languages that do not
    // support union types (i.e. Java, .NET), so we lose type safety if we have
    // a union.
    if (!tokenizableType(alternatives) && !schema.isTagPropertyName(propName)) {
      alternatives.push(genspec.TOKEN_NAME.fqn);
    }
    return alternatives.join(' | ');
  }

  /**
   * Render a CodeName to a string representation of it in TypeScript
   */
  private renderCodeName(context: genspec.CodeName, type: genspec.CodeName): string {
    const rel = type.relativeTo(context);
    const specType = rel.specName && this.spec.PropertyTypes[rel.specName.fqn];
    if (!specType || schema.isRecordType(specType)) {
      return rel.fqn;
    }
    return this.findNativeType(context, specType);
  }

  private renderTypeUnion(context: genspec.CodeName, types: genspec.CodeName[]): string {
    return types.map((t) => this.renderCodeName(context, t)).join(' | ');
  }

  private docLink(link: string | undefined, ...before: string[]): void {
    if (!link && before.length === 0) {
      return;
    }
    this.code.line('/**');
    before.forEach((line) => this.code.line(` * ${line}`.trimRight()));
    if (link) {
      this.code.line(` * See ${link}`);
    }
    this.code.line(' */');
    return;
  }
}


export class ExtensionCodeGenerator {
  public async getFilesWithoutNodeModules(dir: string): Promise<string[]> {
    let files: string[] = [];
    const items = await fs.readdir(dir);

    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = await fs.stat(itemPath);

      if (stat.isDirectory()) {
        if (!itemPath.includes('node_modules') && !itemPath.includes('\.idea')) {
          const subFiles = await this.getFilesWithoutNodeModules(itemPath);
          files = files.concat(subFiles);
        }
      } else {
        if (!itemPath.includes('node_modules') && !itemPath.includes('\.idea')) {
          files.push(itemPath);
        }
      }
    }

    return files;
  }

  public async emitCode(outPath : string) {
    const extensionFilePaths = await this.getFilesWithoutNodeModules('../@alicloud/extension');
    const pkgTemplate = fs.readFileSync('./lib/pkg-template/package.json', 'utf8');
    for (const extensionFilePath of extensionFilePaths) {
      const filePathRegex = /@alicloud\/extension\/(.*?)\//;
      const filePathMatch = extensionFilePath.match(filePathRegex);
      let packageName = undefined;
      if (filePathMatch && filePathMatch.length > 1) {
        packageName = filePathMatch[1];
      } else {
        continue;
      }
      const serviceName = packageName.split('-')[2];
      const fileName = extensionFilePath.split('/')[extensionFilePath.split('/').length-1];
      const pathSuffixIndex = extensionFilePath.indexOf("@alicloud/extension/") + "@alicloud/extension/".length;
      const pathSuffix = extensionFilePath.substring(pathSuffixIndex);
      const resourceFilePath = `${outPath}/${pathSuffix}`;
      // console.log(extensionFilePath);
      let data = fs.readFileSync(extensionFilePath, 'utf8');
      let resourceCodes :string[] = [];
      if (fs.existsSync(resourceFilePath)) {
        const resourceData = fs.readFileSync(resourceFilePath, 'utf8');
        resourceCodes = resourceData.split('\n');

        if (fileName === 'package.json') {
          console.log('merge package.json: ', extensionFilePath);
          const mergedPackageData = util.mergeObjects(JSON.parse(resourceData), JSON.parse(data));
          const mergedPackageJson = JSON.stringify(mergedPackageData, null, 2);
          fs.writeFileSync(resourceFilePath, mergedPackageJson, 'utf8');
          continue;
        } else if (fileName === 'index.ts') {
          console.log('merge extension index: ', extensionFilePath);
          const extensionCodes = data.split('\n');
          resourceCodes = resourceCodes.concat(extensionCodes);
          fs.writeFile(resourceFilePath, resourceCodes.join('\n'), 'utf8', (err) => {
            if (err) {
              console.error(`Error writing to ${resourceFilePath}: ${err}`);
            }
          });
          continue;
        }

        console.log('merge extension resource: ', extensionFilePath);

        const resourceClassRegex = /class\s+Extension(\w+)\s+extends/;
        const resourceClassMatch = resourceClassRegex.exec(data);
        let resourceName: string;
        if (resourceClassMatch && resourceClassMatch.length > 1) {
          resourceName = resourceClassMatch[1];
          data = data.replace(new RegExp(`Extension${resourceName}`, 'g'), `${resourceName}`);
        } else {
          throw new Error(`Extension class name is not correct: ${extensionFilePath}`);
        }

        const matchingImports = [
          resourceName,
          `${resourceName}Props`,
          `Ros${resourceName}`,
          `I${resourceName}`
        ];

        const extensionCodes = data.split('\n');

        let resourceCodeIndex = resourceCodes.findIndex((str) => str.includes(`export { Ros${resourceName} as ${resourceName}Property };`)) + 1;
        let generateImportIndex = resourceCodes.findIndex((str) => str.includes(`import { Ros${resourceName} } from './${serviceName}.generated';`))

        let extensionLeftBracketCounts = 0;
        let constructorBeginIndex = 0;
        let constructorEndIndex = 0;
        let meetExtensionConstructor = false;
        let meetSuperConstructor = false;
        for (let codeLine of extensionCodes) {
          if (codeLine === 'import * as ros from "@alicloud/ros-cdk-core";') {
            continue;
          }
          if (codeLine && codeLine.includes(`@alicloud/${packageName}`)) {
            const matches = codeLine.match(/{(.*?)}/);
            if (matches && matches[1]) {
              const importResourceNames = matches[1].split(',').map((element) => element.trim());
              let generateImports: string[] = [];
              for (const importResourceName of importResourceNames) {
                if (matchingImports.includes(importResourceName)) {
                  continue;
                }
                if (importResourceName.startsWith('Ros')) {
                  generateImports.push(importResourceName);
                  continue;
                }
                resourceCodes.splice(resourceCodeIndex, 0,
                    `import { ${importResourceName} } from './${importResourceName.toLowerCase()}';`);
                resourceCodeIndex++;
              }
              if (generateImports.length > 0) {
                resourceCodes.splice(generateImportIndex, 1,
                    `import { Ros${resourceName}, ${generateImports.join(', ')} } from './${serviceName}.generated';`);
              }
            }
          } else if (codeLine && codeLine.includes(`import`)) {
            resourceCodes.splice(resourceCodeIndex, 0, codeLine);
            resourceCodeIndex++;
          } else if (codeLine && codeLine.includes(`class ${resourceName}`)) {
            // 合并拓展继承和实现
            const extensionExtracted = extractExtendsImplements(codeLine);
            extensionExtracted.extends = extensionExtracted.extends.filter((element) => element !== resourceName);
            const resourceClassIndex = resourceCodes.findIndex((str) => str.includes(`export class ${resourceName}`));
            const resourceExtracted = extractExtendsImplements(resourceCodes[resourceClassIndex]);
            resourceExtracted.extends = resourceExtracted.extends.concat(extensionExtracted.extends);
            resourceExtracted.implements = resourceExtracted.implements.concat(extensionExtracted.implements);
            const newResourceClass = `export class ${resourceName} ${resourceExtracted.extends.length > 0 ? `extends ${resourceExtracted.extends.join(', ')}` : ''}${resourceExtracted.implements.length > 0 ? ` implements ${resourceExtracted.implements.join(', ')}` : ''} \{`;
            resourceCodes.splice(resourceClassIndex, 1, newResourceClass);

            const subArray = resourceCodes.slice(resourceClassIndex + 1);
            const relativeConstructorIndex = subArray.findIndex((str) => str.includes("constructor(scope: ros.Construct,"));
            if (relativeConstructorIndex !== -1) {
              constructorBeginIndex = resourceClassIndex + 1 + relativeConstructorIndex;
              for (let i = constructorBeginIndex; i > 0; i--) {
                if (resourceCodes[i] && resourceCodes[i].includes('/**')) {
                  resourceCodes.splice(i, 0, '');
                  constructorBeginIndex++;
                  resourceCodeIndex = i;
                  break;
                }
              }
              let leftBracketCounts = 0;
              for (let i = constructorBeginIndex; i < resourceCodes.length; i++) {
                leftBracketCounts += (resourceCodes[i].split('{').length - 1);
                leftBracketCounts -= (resourceCodes[i].split('}').length - 1);
                if (leftBracketCounts === 0) {
                  constructorEndIndex = i;
                  break;
                }
              }
            } else {
              throw new Error(`Class ${resourceName} has no constuctor`);
            }
          } else if (codeLine && codeLine.includes(`constructor(scope: ros.Construct, id: string, props: `)
              && constructorBeginIndex != 0) {
            extensionLeftBracketCounts += (codeLine.split('{').length - 1);
            extensionLeftBracketCounts -= (codeLine.split('}').length - 1);
            meetExtensionConstructor = true;
          } else {
            if (codeLine && codeLine.includes(`super(scope, id, props, enableResourcePropertyConstraint);`)) {
              meetSuperConstructor = true;
              continue;
            }
            extensionLeftBracketCounts += (codeLine.split('{').length - 1);
            extensionLeftBracketCounts -= (codeLine.split('}').length - 1);
            if (meetExtensionConstructor) {
              if (extensionLeftBracketCounts === 0) {
                meetExtensionConstructor = false;
              } else {
                if (meetSuperConstructor) {
                  resourceCodes.splice(constructorEndIndex, 0, codeLine);
                  constructorEndIndex++;
                } else {
                  resourceCodes.splice(constructorBeginIndex + 1, 0, codeLine);
                }
                constructorBeginIndex++;
              }
              continue;
            }
            if (extensionLeftBracketCounts === -1) {
              resourceCodeIndex = resourceCodes.length - 1;
              continue;
            }
            if (!codeLine && resourceCodeIndex > 0 && !resourceCodes[resourceCodeIndex-1]) {
              continue;
            }
            resourceCodes.splice(resourceCodeIndex, 0, codeLine);
            resourceCodeIndex++;
            constructorBeginIndex++;
            constructorEndIndex++;
          }
        }
      } else {
        const directoryPath = path.dirname(resourceFilePath);
        await fs.ensureDir(directoryPath);
        console.log('add extension file: ', extensionFilePath);
        if (fileName !== 'package.json' && !fileName.endsWith('.ts')) {
          fs.copyFileSync(extensionFilePath, resourceFilePath);
          continue;
        }
        if (fileName === 'package.json') {
          const mergedPackageData = util.mergeObjects(JSON.parse(pkgTemplate), JSON.parse(data));
          const mergedPackageJson = JSON.stringify(mergedPackageData, null, 2);
          fs.writeFileSync(resourceFilePath, mergedPackageJson, 'utf8');
          continue;
        }
        const codes = data.split('\n');

        // fs.mkdirSync(resourceFilePath, { recursive: true });
        for (let codeLine of codes) {
          // const codeLine = codes.shift();
          if (codeLine && codeLine.includes(`@alicloud/${packageName}`)) {
            const matches = codeLine.match(/{(.*?)}/);
            if (matches && matches[1]) {
              const importResourceNames = matches[1].split(',').map((element) => element.trim());
              let generateImports: string[] = [];
              for (const importResourceName of importResourceNames) {
                if (importResourceName.startsWith('Ros')) {
                  generateImports.push(importResourceName);
                  continue;
                }
                resourceCodes.push(
                    `import { ${importResourceName} } from './${importResourceName.toLowerCase()}';`,
                );
              }
              if (generateImports.length > 0) {
                resourceCodes.push(
                    `import { ${generateImports.join(', ')} } from './${serviceName}.generated';`);
              }
            }
          } else {
            resourceCodes.push(codeLine);
          }
        }
      }
      fs.writeFile(resourceFilePath, resourceCodes.join('\n'), 'utf8', (err) => {
        if (err) {
          console.error(`Error writing to ${resourceFilePath}: ${err}`);
        }
      });
    }
  }
}

/**
 * Quotes a code name for inclusion in a JSDoc comment, so it will render properly
 * in the Markdown output.
 *
 * @param code a code name to be quoted.
 *
 * @returns the code name surrounded by double backticks.
 */
function quoteCode(code: string): string {
  return '`' + code + '`';
}

function tokenizableType(alternatives: string[]): boolean {
  if (alternatives.length > 1) {
    return false;
  }

  // 支持IResolvable隐式转换
  // const type = alternatives[0];
  // if (type === 'string') {
  //   return true;
  // }
  //
  // if (type === 'string[]') {
  //   return true;
  // }
  //
  // if (type === 'number') {
  //   return true;
  // }

  return false;
}

function extractExtendsImplements(classDeclaration: string): { extends: string[], implements: string[] } {
  const result: { extends: string[], implements: string[] } = { extends: [], implements: [] };

  // 匹配 extends 和 implements 的位置
  const extendsIndex = classDeclaration.indexOf('extends');
  const implementsIndex = classDeclaration.indexOf('implements');

  if (extendsIndex !== -1) {
    // 提取 extends 后的内容
    let extendsEndIndex = implementsIndex !== -1 ? implementsIndex : classDeclaration.length;
    const extendsMatch = classDeclaration.substring(extendsIndex + 'extends'.length, extendsEndIndex).match(/([\w\d\s,.<>]+)/);
    if (extendsMatch) {
      result.extends = extendsMatch[1].split(',').map(s => s.trim()).filter(s => s.length > 0);
    }
  }

  if (implementsIndex !== -1) {
    // 提取 implements 后的内容
    const implementsMatch = classDeclaration.substring(implementsIndex + 'implements'.length).match(/([\w\d\s,.<>]+)/);
    if (implementsMatch) {
      result.implements = implementsMatch[1].split(',').map(s => s.trim()).filter(s => s.length > 0);
    }
  }

  return result;
}

enum Container {
  Interface = 'INTERFACE',
  Class = 'CLASS',
}

interface EmitPropertyProps {
  context: genspec.CodeName;
  propName: string;
  spec: schema.Property;
  additionalDocs: string;
}
