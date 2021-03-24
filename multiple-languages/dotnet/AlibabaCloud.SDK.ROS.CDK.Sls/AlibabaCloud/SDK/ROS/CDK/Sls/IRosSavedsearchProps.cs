using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::Savedsearch`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSavedsearchProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosSavedsearchProps")]
    public interface IRosSavedsearchProps
    {
        /// <remarks>
        /// <strong>Property</strong>: detail:
        /// </remarks>
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty\"}]}}")]
        object Detail
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: project: Project name
        /// </remarks>
        [JsiiProperty(name: "project", typeJson: "{\"primitive\":\"string\"}")]
        string Project
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SLS::Savedsearch`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSavedsearchProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosSavedsearchProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IRosSavedsearchProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: detail:
            /// </remarks>
            [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty\"}]}}")]
            public object Detail
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: project: Project name
            /// </remarks>
            [JsiiProperty(name: "project", typeJson: "{\"primitive\":\"string\"}")]
            public string Project
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
