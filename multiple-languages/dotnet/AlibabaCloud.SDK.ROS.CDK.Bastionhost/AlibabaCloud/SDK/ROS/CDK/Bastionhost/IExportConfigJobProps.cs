using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bastionhost
{
    /// <summary>Properties for defining a `ExportConfigJob`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-exportconfigjob
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IExportConfigJobProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.ExportConfigJobProps")]
    public interface IExportConfigJobProps
    {
        /// <summary>Property instanceId: The ID of the bastion host instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `ExportConfigJob`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-exportconfigjob
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IExportConfigJobProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.ExportConfigJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bastionhost.IExportConfigJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the bastion host instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
