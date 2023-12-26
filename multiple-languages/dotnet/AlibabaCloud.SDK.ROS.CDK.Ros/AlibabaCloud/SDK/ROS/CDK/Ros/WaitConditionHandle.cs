using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ROS::WaitConditionHandle`, which is used to receive signals.</summary>
    /// <remarks>
    /// You can use ALIYUN::ROS::WaitConditionHandle together with ALIYUN::ROS::WaitCondition to manage the execution process of a stack. When you create an Elastic Compute Service (ECS) instance, a signal is sent during the execution of the user data.
    ///
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWaitConditionHandle`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-waitconditionhandle
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ros.WaitConditionHandle), fullyQualifiedName: "@alicloud/ros-cdk-ros.WaitConditionHandle", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-ros.WaitConditionHandleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class WaitConditionHandle : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public WaitConditionHandle(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ros.IWaitConditionHandleProps? props = null, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ros.IWaitConditionHandleProps? props = null, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected WaitConditionHandle(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected WaitConditionHandle(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.</summary>
        /// <remarks>
        /// You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'
        /// </remarks>
        [JsiiProperty(name: "attrCurlCli", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrCurlCli
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute Headers: HTTP POST Headers used for signalling handle completion or failure.</summary>
        [JsiiProperty(name: "attrHeaders", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrHeaders
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure.</summary>
        /// <remarks>
        /// As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
        /// </remarks>
        [JsiiProperty(name: "attrPowerShellCurlCli", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPowerShellCurlCli
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute URL: HTTP POST URL used for signalling handle completion or failure.</summary>
        [JsiiProperty(name: "attrUrl", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrUrl
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure.</summary>
        /// <remarks>
        /// As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{"status": "SUCCESS"}" , or signal failure by adding --data-binary "{"status": "FAILURE"}"
        /// </remarks>
        [JsiiProperty(name: "attrWindowsCurlCli", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrWindowsCurlCli
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }
    }
}
