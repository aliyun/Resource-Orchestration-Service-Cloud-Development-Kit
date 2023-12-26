using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource
{
    /// <summary>Properties for defining a `RosFlows`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flows
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosFlowsProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.datasource.RosFlowsProps")]
    public interface IRosFlowsProps
    {

        /// <summary>Properties for defining a `RosFlows`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flows
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosFlowsProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.datasource.RosFlowsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.IRosFlowsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
