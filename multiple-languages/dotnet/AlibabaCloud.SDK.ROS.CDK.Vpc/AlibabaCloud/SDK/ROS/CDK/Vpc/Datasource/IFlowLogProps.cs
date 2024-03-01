using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `FlowLog`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IFlowLogProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.FlowLogProps")]
    public interface IFlowLogProps
    {
        /// <summary>Property flowLogId: The flow log ID.</summary>
        [JsiiProperty(name: "flowLogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FlowLogId
        {
            get;
        }

        /// <summary>Properties for defining a `FlowLog`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IFlowLogProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.FlowLogProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IFlowLogProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property flowLogId: The flow log ID.</summary>
            [JsiiProperty(name: "flowLogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FlowLogId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
