using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `ALIYUN::EDAS::DeployGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IDeployGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.DeployGroupProps")]
    public interface IDeployGroupProps
    {
        /// <summary>Property appId: Application ID.</summary>
        [JsiiProperty(name: "appId", typeJson: "{\"primitive\":\"string\"}")]
        string AppId
        {
            get;
        }

        /// <summary>Property groupName: Group name, maximum length of 64.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
        string GroupName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::EDAS::DeployGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDeployGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.DeployGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IDeployGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appId: Application ID.</summary>
            [JsiiProperty(name: "appId", typeJson: "{\"primitive\":\"string\"}")]
            public string AppId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property groupName: Group name, maximum length of 64.</summary>
            [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
