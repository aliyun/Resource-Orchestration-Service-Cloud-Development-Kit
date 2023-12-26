using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `RosAlert`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAlertProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAlertProps")]
    public interface IRosAlertProps
    {
        /// <remarks>
        /// <strong>Property</strong>: detail:
        /// </remarks>
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.DetailProperty\"}]}}")]
        object Detail
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: project: Project name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Project
        {
            get;
        }

        /// <summary>Properties for defining a `RosAlert`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAlertProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAlertProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IRosAlertProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: detail:
            /// </remarks>
            [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.DetailProperty\"}]}}")]
            public object Detail
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: project: Project name:
            /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            /// 2. Must start and end with lowercase letters and numbers.
            /// 3. The name length is 3-63 characters.
            /// </remarks>
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Project
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
