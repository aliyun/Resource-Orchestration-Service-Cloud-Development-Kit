using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::Savedsearch`.</summary>
    [JsiiInterface(nativeType: typeof(ISavedsearchProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.SavedsearchProps")]
    public interface ISavedsearchProps
    {
        /// <summary>Property detail:.</summary>
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty\"}]}}")]
        object Detail
        {
            get;
        }

        /// <summary>Property project: Project name.</summary>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Project
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SLS::Savedsearch`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISavedsearchProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.SavedsearchProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.ISavedsearchProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property detail:.</summary>
            [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty\"}]}}")]
            public object Detail
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property project: Project name.</summary>
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Project
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
