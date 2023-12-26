using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq.Datasource
{
    /// <summary>Properties for defining a `Instances`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-instances
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq.datasource.InstancesProps")]
    public interface IInstancesProps
    {

        /// <summary>Properties for defining a `Instances`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-instances
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq.datasource.InstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rocketmq.Datasource.IInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
