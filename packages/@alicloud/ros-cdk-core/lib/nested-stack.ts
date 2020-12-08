import { Construct, IConstruct } from "./construct-compat";
import { Stack } from "./stack";

import { Token } from "./token";
import { Lazy } from "./lazy";
import { Fn } from "./ros-fn";
import { RosPseudo } from "./ros-pseudo";
import { RosStack } from "./ros-stack";
import { RosElement } from "./ros-element";
import { IResolveContext } from "./resolvable";

const NESTED_STACK_SYMBOL = Symbol.for("ros-cdk-core.NestedStack");
export interface NestedStackProps {
  readonly parameters?: { [key: string]: any };
  readonly templateUrl?: string;
  readonly templateBody?: string;
  readonly timeout?: number;
}

export class NestedStack extends Stack {
  public static isNestedStack(x: any): x is NestedStack {
    return x != null && typeof x === "object" && NESTED_STACK_SYMBOL in x;
  }

  private parameters: { [name: string]: any };
  private resource: RosStack;
  private _contextualStackId: string;
  private _contextualStackName: string;
  private templateBody?: string;

  constructor(scope: Construct, id: string, props: NestedStackProps = {}) {
    super(scope, id);
    let stackProps: { [key: string]: any } = {
      parameters: Lazy.anyValue({
        produce: () =>
          Object.keys(this.parameters).length > 0 ? this.parameters : undefined,
      }),
      timeoutMins: props.timeout,
    };

    if (props.templateUrl) {
      stackProps.templateUrl = props.templateUrl;
    } else {
      stackProps.templateBody = Lazy.stringValue({
        produce: () => this.templateBody,
      });
    }

    const parentScope = new Construct(scope, id + ".NestedStack");
    this.resource = new RosStack(parentScope, `${id}`, stackProps);
    this._contextualStackName = this.contextualAttribute(
      RosPseudo.stackName,
      Fn.select(1, Fn.split("/", this.resource.ref))
    );
    this._contextualStackId = this.contextualAttribute(
      RosPseudo.stackId,
      this.resource.ref
    );
    Object.defineProperty(this, NESTED_STACK_SYMBOL, { value: true });
    this.parameters = props.parameters || {};
  }

  /**
   * @internal
   */
  _toRosTemplate() {
    const template: any = {};
    const elements = rosElements(this);
    if (elements.length === 0) return;

    const fragments = elements.map((e) => this.resolve(e._toRosTemplate()));
    for (const fragment of fragments) {
      merge(template, fragment);
    }
    this.templateBody = this.resolve(template);
    return this.templateBody;
  }

  public get stackName() {
    return this._contextualStackName;
  }

  public get stackId() {
    return this._contextualStackId;
  }

  public setParameter(name: string, value: any) {
    this.parameters[name] = value;
  }

  public getAtt(attributeName: string): string {
    return Token.asString(this.resource.getAtt("Outputs." + attributeName));
  }

  private contextualAttribute(innerValue: string, outerValue: string) {
    return Token.asString({
      resolve: (context: IResolveContext) => {
        if (Stack.of(context.scope) === this) {
          return innerValue;
        } else {
          return outerValue;
        }
      },
    });
  }
}

function rosElements(node: IConstruct, into: RosElement[] = []): RosElement[] {
  if (RosElement.isRosElement(node)) {
    into.push(node);
  }
  for (const child of node.node.children) {
    // Don't recurse into a substack
    if (Stack.isStack(child)) {
      continue;
    }
    rosElements(child, into);
  }
  return into;
}

function merge(template: any, fragment: any): void {
  for (const section of Object.keys(fragment)) {
    const src = fragment[section];

    // create top-level section if it doesn't exist
    const dest = template[section];
    if (!dest) {
      template[section] = src;
    } else {
      template[section] = mergeSection(section, dest, src);
    }
  }
}

function mergeSection(section: string, val1: any, val2: any): any {
  switch (section) {
    case "Description":
      return `${val1}\n${val2}`;
    case "Resources":
    case "Conditions":
    case "Parameters":
    case "Outputs":
    case "Mappings":
    case "Metadata":
      return mergeObjectsWithoutDuplicates(section, val1, val2);
    default:
      throw new Error(
        `CDK doesn't know how to merge two instances of the template section '${section}' - ` +
          "please remove one of them from your code"
      );
  }
}

function mergeObjectsWithoutDuplicates(
  section: string,
  dest: any,
  src: any
): any {
  if (typeof dest !== "object") {
    throw new Error(`Expecting ${JSON.stringify(dest)} to be an object`);
  }
  if (typeof src !== "object") {
    throw new Error(`Expecting ${JSON.stringify(src)} to be an object`);
  }

  // add all entities from source section to destination section
  for (const id of Object.keys(src)) {
    if (id in dest) {
      throw new Error(`section '${section}' already contains '${id}'`);
    }
    dest[id] = src[id];
  }

  return dest;
}
