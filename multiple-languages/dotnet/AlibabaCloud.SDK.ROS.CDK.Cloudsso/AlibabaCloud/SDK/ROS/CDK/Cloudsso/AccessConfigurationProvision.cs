using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::AccessConfigurationProvision`, which is used to provision an access configuration for an account in your resource directory.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessConfigurationProvision`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cloudsso.AccessConfigurationProvision), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.AccessConfigurationProvision", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cloudsso.AccessConfigurationProvisionProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class AccessConfigurationProvision : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public AccessConfigurationProvision(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IAccessConfigurationProvisionProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IAccessConfigurationProvisionProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected AccessConfigurationProvision(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected AccessConfigurationProvision(DeputyProps props): base(props)
        {
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudsso.AccessConfigurationProvisionProps\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Cloudsso.IAccessConfigurationProvisionProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cloudsso.IAccessConfigurationProvisionProps>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
