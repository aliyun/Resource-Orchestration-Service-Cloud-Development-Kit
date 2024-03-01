using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `RosFlowLog`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosFlowLogProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosFlowLogProps")]
    public interface IRosFlowLogProps
    {
        /// <remarks>
        /// <strong>Property</strong>: flowLogId: The flow log ID.
        /// </remarks>
        [JsiiProperty(name: "flowLogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FlowLogId
        {
            get;
        }

        /// <summary>Properties for defining a `RosFlowLog`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosFlowLogProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosFlowLogProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosFlowLogProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: flowLogId: The flow log ID.
            /// </remarks>
            [JsiiProperty(name: "flowLogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FlowLogId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
