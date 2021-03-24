using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `ALIYUN::EDAS::DeployGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDeployGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosDeployGroupProps")]
    public interface IRosDeployGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appId: Application ID
        /// </remarks>
        [JsiiProperty(name: "appId", typeJson: "{\"primitive\":\"string\"}")]
        string AppId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupName: Group name, maximum length of 64.
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
        string GroupName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::EDAS::DeployGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDeployGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosDeployGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IRosDeployGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: appId: Application ID
            /// </remarks>
            [JsiiProperty(name: "appId", typeJson: "{\"primitive\":\"string\"}")]
            public string AppId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: Group name, maximum length of 64.
            /// </remarks>
            [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
