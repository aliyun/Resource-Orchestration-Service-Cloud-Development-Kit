import * as api from '@alicloud/ros-cdk-cxapi';
import { Stack } from '@alicloud/ros-cdk-core';
import { StackInspector } from './inspector';
import { SynthUtils } from './synth-utils';

export function expect(stack: api.RosStackArtifact | Stack, skipValidation = false): StackInspector {
  // if this is already a synthesized stack, then just inspect it.
  const artifact =
    stack instanceof api.RosStackArtifact ? stack : SynthUtils._synthesizeWithNested(stack, { skipValidation });
  return new StackInspector(artifact);
}
