using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls.Datasource
{
    /// <summary>Properties for defining a `Projects`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-projects
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IProjectsProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.datasource.ProjectsProps")]
    public interface IProjectsProps
    {

        /// <summary>Properties for defining a `Projects`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-projects
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IProjectsProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.datasource.ProjectsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.Datasource.IProjectsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
