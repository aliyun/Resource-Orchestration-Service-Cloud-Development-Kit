using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosInfo), fullyQualifiedName: "@alicloud/ros-cdk-core.RosInfo", parametersJson: "[{\"docs\":{\"summary\":\"The parent construct.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"info\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}}]")]
    public class RosInfo : AlibabaCloud.SDK.ROS.CDK.Core.RosElement
    {
        /// <summary>Creates properties for this stack.</summary>
        /// <param name="scope">The parent construct.</param>
        public RosInfo(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, object info): base(new DeputyProps(new object?[]{scope, id, info}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosInfo(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosInfo(DeputyProps props): base(props)
        {
        }

        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}")]
        public static string Description
        {
            get => GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosInfo))!;
            set => SetStaticProperty(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosInfo), value);
        }

        [JsiiProperty(name: "formatVersion", typeJson: "{\"primitive\":\"string\"}")]
        public static string FormatVersion
        {
            get => GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosInfo))!;
            set => SetStaticProperty(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosInfo), value);
        }

        [JsiiProperty(name: "metadata", typeJson: "{\"primitive\":\"string\"}")]
        public static string Metadata
        {
            get => GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosInfo))!;
            set => SetStaticProperty(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosInfo), value);
        }

        [JsiiProperty(name: "v20150901", typeJson: "{\"primitive\":\"string\"}")]
        public static string V20150901
        {
            get => GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosInfo))!;
            set => SetStaticProperty(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosInfo), value);
        }
    }
}
