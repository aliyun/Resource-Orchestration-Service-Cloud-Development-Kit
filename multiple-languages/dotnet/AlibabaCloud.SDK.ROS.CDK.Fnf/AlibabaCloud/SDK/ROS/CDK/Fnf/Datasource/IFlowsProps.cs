using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource
{
    /// <summary>Properties for defining a `Flows`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flows
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IFlowsProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.datasource.FlowsProps")]
    public interface IFlowsProps
    {

        /// <summary>Properties for defining a `Flows`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flows
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IFlowsProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.datasource.FlowsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.IFlowsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
