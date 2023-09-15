using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Devops
{
    /// <summary>A ROS resource type:  `ALIYUN::DEVOPS::VariableGroup`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Devops.VariableGroup), fullyQualifiedName: "@alicloud/ros-cdk-devops.VariableGroup", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-devops.VariableGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class VariableGroup : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::DEVOPS::VariableGroup`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public VariableGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Devops.IVariableGroupProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Devops.IVariableGroupProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected VariableGroup(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected VariableGroup(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute VariableGroupId: Variable group id.</summary>
        [JsiiProperty(name: "attrVariableGroupId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrVariableGroupId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }
    }
}
