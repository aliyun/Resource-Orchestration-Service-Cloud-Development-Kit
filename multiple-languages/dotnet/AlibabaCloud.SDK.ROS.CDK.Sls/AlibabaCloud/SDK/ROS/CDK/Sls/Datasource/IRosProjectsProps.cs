using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls.Datasource
{
    /// <summary>Properties for defining a `RosProjects`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-projects
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosProjectsProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.datasource.RosProjectsProps")]
    public interface IRosProjectsProps
    {

        /// <summary>Properties for defining a `RosProjects`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-projects
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosProjectsProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.datasource.RosProjectsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.Datasource.IRosProjectsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
