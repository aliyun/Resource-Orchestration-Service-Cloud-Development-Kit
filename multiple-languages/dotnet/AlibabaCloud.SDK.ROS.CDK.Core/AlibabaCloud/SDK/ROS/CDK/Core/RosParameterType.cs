using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{

    [JsiiEnum(nativeType: typeof(RosParameterType), fullyQualifiedName: "@alicloud/ros-cdk-core.RosParameterType")]
    public enum RosParameterType
    {
        [JsiiEnumMember(name: "STRING")]
        STRING,
        [JsiiEnumMember(name: "NUMBER")]
        NUMBER,
        [JsiiEnumMember(name: "JSON")]
        JSON,
        [JsiiEnumMember(name: "BOOLEAN")]
        BOOLEAN,
        [JsiiEnumMember(name: "COMMAD_ELIMITED_LIST")]
        COMMAD_ELIMITED_LIST,
        [JsiiEnumMember(name: "OOS_PARAMETER")]
        OOS_PARAMETER,
        [JsiiEnumMember(name: "OOS_SECRET_PARAMETER")]
        OOS_SECRET_PARAMETER
    }
}
