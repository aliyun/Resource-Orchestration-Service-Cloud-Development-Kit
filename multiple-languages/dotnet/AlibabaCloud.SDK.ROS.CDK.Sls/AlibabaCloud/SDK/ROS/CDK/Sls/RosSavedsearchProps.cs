using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLS::Savedsearch`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosSavedsearchProps")]
    public class RosSavedsearchProps : AlibabaCloud.SDK.ROS.CDK.Sls.IRosSavedsearchProps
    {
        /// <remarks>
        /// <strong>Property</strong>: detail:
        /// </remarks>
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty\"}]}}", isOverride: true)]
        public object Detail
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: project: Project name
        /// </remarks>
        [JsiiProperty(name: "project", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Project
        {
            get;
            set;
        }
    }
}
