using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::Alert`.</summary>
    [JsiiInterface(nativeType: typeof(IAlertProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.AlertProps")]
    public interface IAlertProps
    {
        /// <summary>Property detail:.</summary>
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.DetailProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Detail
        {
            get;
        }

        /// <summary>Property project: Project name: 1.</summary>
        /// <remarks>
        /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "project", typeJson: "{\"primitive\":\"string\"}")]
        string Project
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SLS::Alert`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAlertProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.AlertProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IAlertProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property detail:.</summary>
            [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-sls.RosAlert.DetailProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Detail
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property project: Project name: 1.</summary>
            /// <remarks>
            /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            /// 2. Must start and end with lowercase letters and numbers.
            /// 3. The name length is 3-63 characters.
            /// </remarks>
            [JsiiProperty(name: "project", typeJson: "{\"primitive\":\"string\"}")]
            public string Project
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
