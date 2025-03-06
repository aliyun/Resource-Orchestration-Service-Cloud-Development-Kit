import * as cxapi from '@alicloud/ros-cdk-cxapi';
import * as core from '@alicloud/ros-cdk-core';
import * as fs from 'fs';
import * as path from 'path';

export class SynthUtils {
  public static synthesize(stack: core.Stack, options: core.SynthesisOptions = {}): cxapi.RosStackArtifact {
    // always synthesize against the root (be it an App or whatever) so all artifacts will be included
    const root = stack.node.root;

    // if the root is an app, invoke "synth" to avoid double synthesis
    const assembly = root instanceof core.App ? root.synth() : core.ConstructNode.synth(root.node, options);

    return assembly.getStackArtifact(stack.artifactId);
  }

  /**
   * Synthesizes the stack and returns the resulting template.
   */
  public static toRosTemplate(stack: core.Stack, options: core.SynthesisOptions = {}): any {
    const synth = this._synthesizeWithNested(stack, options);
    if (synth instanceof cxapi.RosStackArtifact) {
      return synth.template;
    } else {
      return synth;
    }
  }

  /**
   * @returns Returns a subset of the synthesized template (only specific resource types).
   */
  public static subset(stack: core.Stack, options: SubsetOptions): any {
    const template = this.toRosTemplate(stack);
    if (template.Resources) {
      for (const [key, resource] of Object.entries(template.Resources)) {
        if (options.resourceTypes && !options.resourceTypes.includes((resource as any).Type)) {
          delete template.Resources[key];
        }
      }
    }

    return template;
  }

  /**
   * Synthesizes the stack and returns a `RosStackArtifact` which can be inspected.
   * Supports nested stacks as well as normal stacks.
   *
   * @return RosStackArtifact for normal stacks or the actual template for nested stacks
   * @internal
   */
  public static _synthesizeWithNested(
    stack: core.Stack,
    options: core.SynthesisOptions = {},
  ): cxapi.RosStackArtifact | object {
    // always synthesize against the root (be it an App or whatever) so all artifacts will be included
    const root = stack.node.root;

    // if the root is an app, invoke "synth" to avoid double synthesis
    const assembly = root instanceof core.App ? root.synth() : core.ConstructNode.synth(root.node, options);

    // if this is a nested stack (it has a parent), then just read the template as a string
    if (stack.nestedStackParent) {
      return JSON.parse(fs.readFileSync(path.join(assembly.directory, stack.templateFile)).toString('utf-8'));
    }

    return assembly.getStackArtifact(stack.artifactId);
  }
}

export interface SubsetOptions {
  /**
   * Match all resources of the given type
   */
  resourceTypes?: string[];
}
