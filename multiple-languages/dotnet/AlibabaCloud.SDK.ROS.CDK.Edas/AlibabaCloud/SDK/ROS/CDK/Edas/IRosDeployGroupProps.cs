using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `RosDeployGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-deploygroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDeployGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosDeployGroupProps")]
    public interface IRosDeployGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appId: Application ID
        /// </remarks>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupName: Group name, maximum length of 64.
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupName
        {
            get;
        }

        /// <summary>Properties for defining a `RosDeployGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-deploygroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDeployGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosDeployGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IRosDeployGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: appId: Application ID
            /// </remarks>
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: Group name, maximum length of 64.
            /// </remarks>
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
