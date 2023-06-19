package com.aliyun.ros.cdk.core;

/**
 * A ROS parameter.
 * <p>
 * Parameters enable you to input custom values to your template each time you create or
 * update a stack.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:07.928Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosParameter")
public class RosParameter extends com.aliyun.ros.cdk.core.RosElement {

    protected RosParameter(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosParameter(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        TYPE_ALLOWED_VALUES = java.util.Collections.unmodifiableList(software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.class, "TYPE_ALLOWED_VALUES", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
    }

    public RosParameter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosParameterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    public RosParameter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    public @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext _context) {
        return software.amazon.jsii.Kernel.call(this, "resolve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(_context, "_context is required") });
    }

    public void validateProperties(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosParameterProps props) {
        software.amazon.jsii.Kernel.call(this, "validateProperties", software.amazon.jsii.NativeType.VOID, new Object[] { props });
    }

    public void validateProperties() {
        software.amazon.jsii.Kernel.call(this, "validateProperties", software.amazon.jsii.NativeType.VOID);
    }

    public final static java.util.List<java.lang.String> TYPE_ALLOWED_VALUES;

    /**
     * Indicates if this parameter is configured with "NoEcho" enabled.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getNoEcho() {
        return software.amazon.jsii.Kernel.get(this, "noEcho", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * The parameter value as a Token.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getValue() {
        return software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * The parameter value, if it represents a string.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getValueAsAny() {
        return software.amazon.jsii.Kernel.get(this, "valueAsAny", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * The parameter value, if it represents a string.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getValueAsBoolean() {
        return software.amazon.jsii.Kernel.get(this, "valueAsBoolean", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * The parameter value, if it represents a string list.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getValueAsList() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "valueAsList", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
    }

    /**
     * The parameter value, if it represents a number.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Number getValueAsNumber() {
        return software.amazon.jsii.Kernel.get(this, "valueAsNumber", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     * The parameter value, if it represents a string.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getValueAsString() {
        return software.amazon.jsii.Kernel.get(this, "valueAsString", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosParameter.AssociationProperty")
    public static class AssociationProperty extends software.amazon.jsii.JsiiObject {

        protected AssociationProperty(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        protected AssociationProperty(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
            super(initializationMode);
        }

        static {
            ALB_ACL_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ALB_ACL_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ALB_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ALB_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CAS_CERTIFICATE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CAS_CERTIFICATE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CHARGE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CHARGE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CODE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CODE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            COMMA_DELIMITED_LIST = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "COMMA_DELIMITED_LIST", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CRON = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CRON", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            DATE_TIME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "DATE_TIME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_AUTO_SNAPSHOT_POLICY_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_AUTO_SNAPSHOT_POLICY_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_COMMAND_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_COMMAND_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_DATA_DISK_CATEGORY = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_DATA_DISK_CATEGORY", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_DISK_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_DISK_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_IMAGE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_IMAGE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_PASSWORD = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_PASSWORD", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_KEY_PAIR_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_KEY_PAIR_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_LAUNCH_TEMPLATE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_LAUNCH_TEMPLATE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_LAUNCH_TEMPLATE_VERSION = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_LAUNCH_TEMPLATE_VERSION", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_REGION_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_REGION_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_RESOURCE_GROUP_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_RESOURCE_GROUP_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_SECURITY_GROUP_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_SECURITY_GROUP_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_SYSTEM_DISK_CATEGORY = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_SYSTEM_DISK_CATEGORY", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_VPC_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_VPC_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_VSWITCH_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_VSWITCH_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_ZONE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_ZONE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            EHPC_CLUSTER_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "EHPC_CLUSTER_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            EHPC_FILE_SYSTEM_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "EHPC_FILE_SYSTEM_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ELASTICSEARCH_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ELASTICSEARCH_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ESS_AUTO_SCALING_GROUP_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ESS_AUTO_SCALING_GROUP_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ESS_SCALING_CONFIGURATION_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ESS_SCALING_CONFIGURATION_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            FILE_CONTENT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "FILE_CONTENT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            GMT_ZONE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "GMT_ZONE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            INFLUX_DB_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "INFLUX_DB_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            JSON = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "JSON", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            LIST_PARAMETER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "LIST_PARAMETER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            LIST_PARAMETERS = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "LIST_PARAMETERS", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_COMMAND_CONTENT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_COMMAND_CONTENT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_COMPONENT_CLEAN_UP_INFO = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_COMPONENT_CLEAN_UP_INFO", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_COMPONENT_TIMER_TRIGGER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_COMPONENT_TIMER_TRIGGER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_FILE_URL = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_FILE_URL", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_PACKAGE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_PACKAGE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_PACKAGE_VERSION = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_PACKAGE_VERSION", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_PARAMETER_VALUE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_PARAMETER_VALUE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_SECRET_PARAMETER_VALUE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_SECRET_PARAMETER_VALUE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_SERVICE_ROLE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_SERVICE_ROLE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_TEMPLATE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_TEMPLATE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_TEMPLATE_VERSION = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_TEMPLATE_VERSION", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OSS_BUCKET_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OSS_BUCKET_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OSS_OBJECT_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OSS_OBJECT_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            PASSWORD = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "PASSWORD", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RAM_ROLE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RAM_ROLE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RAM_USER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RAM_USER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RATE_CONTROL = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RATE_CONTROL", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RDS_ENGINE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RDS_ENGINE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RDS_ENGINE_VERSION = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RDS_ENGINE_VERSION", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RDS_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RDS_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RDS_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RDS_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            REDIS_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "REDIS_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RESOURCE_MANAGER_ACCOUNT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RESOURCE_MANAGER_ACCOUNT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RESOURCE_MANAGER_FOLDER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RESOURCE_MANAGER_FOLDER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SLB_ACL_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SLB_ACL_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SLB_CERTIFICATE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SLB_CERTIFICATE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SLB_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SLB_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SLB_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SLB_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TAGS = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TAGS", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TARGETS = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TARGETS", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TEXT_AREA = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TEXT_AREA", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TIME_TRIGGER_WEEKLY = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TIME_TRIGGER_WEEKLY", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TIME_ZONE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TIME_ZONE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            VPC_CIDR_BLOCK = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "VPC_CIDR_BLOCK", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            VPC_NAT_GATEWAY_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "VPC_NAT_GATEWAY_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            VPC_ROUTER_ROUTE_TABLE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "VPC_ROUTER_ROUTE_TABLE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            VSWITCH_CIDR_BLOCK = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "VSWITCH_CIDR_BLOCK", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        public AssociationProperty() {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
        }

        public final static java.lang.String ALB_ACL_ID;

        public final static java.lang.String ALB_INSTANCE_ID;

        public final static java.lang.String CAS_CERTIFICATE_ID;

        public final static java.lang.String CHARGE_TYPE;

        public final static java.lang.String CODE;

        public final static java.lang.String COMMA_DELIMITED_LIST;

        public final static java.lang.String CRON;

        public final static java.lang.String DATE_TIME;

        public final static java.lang.String ECS_AUTO_SNAPSHOT_POLICY_ID;

        public final static java.lang.String ECS_COMMAND_ID;

        public final static java.lang.String ECS_DATA_DISK_CATEGORY;

        public final static java.lang.String ECS_DISK_ID;

        public final static java.lang.String ECS_IMAGE_ID;

        public final static java.lang.String ECS_INSTANCE_ID;

        public final static java.lang.String ECS_INSTANCE_PASSWORD;

        public final static java.lang.String ECS_INSTANCE_TYPE;

        public final static java.lang.String ECS_KEY_PAIR_NAME;

        public final static java.lang.String ECS_LAUNCH_TEMPLATE_ID;

        public final static java.lang.String ECS_LAUNCH_TEMPLATE_VERSION;

        public final static java.lang.String ECS_REGION_ID;

        public final static java.lang.String ECS_RESOURCE_GROUP_ID;

        public final static java.lang.String ECS_SECURITY_GROUP_ID;

        public final static java.lang.String ECS_SYSTEM_DISK_CATEGORY;

        public final static java.lang.String ECS_VPC_ID;

        public final static java.lang.String ECS_VSWITCH_ID;

        public final static java.lang.String ECS_ZONE_ID;

        public final static java.lang.String EHPC_CLUSTER_ID;

        public final static java.lang.String EHPC_FILE_SYSTEM_ID;

        public final static java.lang.String EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN;

        public final static java.lang.String ELASTICSEARCH_INSTANCE_TYPE;

        public final static java.lang.String ESS_AUTO_SCALING_GROUP_ID;

        public final static java.lang.String ESS_SCALING_CONFIGURATION_ID;

        public final static java.lang.String FILE_CONTENT;

        public final static java.lang.String GMT_ZONE;

        public final static java.lang.String INFLUX_DB_INSTANCE_TYPE;

        public final static java.lang.String JSON;

        public final static java.lang.String LIST_PARAMETER;

        public final static java.lang.String LIST_PARAMETERS;

        public final static java.lang.String OOS_COMMAND_CONTENT;

        public final static java.lang.String OOS_COMPONENT_CLEAN_UP_INFO;

        public final static java.lang.String OOS_COMPONENT_TIMER_TRIGGER;

        public final static java.lang.String OOS_FILE_URL;

        public final static java.lang.String OOS_PACKAGE_NAME;

        public final static java.lang.String OOS_PACKAGE_VERSION;

        public final static java.lang.String OOS_PARAMETER_VALUE;

        public final static java.lang.String OOS_SECRET_PARAMETER_VALUE;

        public final static java.lang.String OOS_SERVICE_ROLE;

        public final static java.lang.String OOS_TEMPLATE_NAME;

        public final static java.lang.String OOS_TEMPLATE_VERSION;

        public final static java.lang.String OSS_BUCKET_NAME;

        public final static java.lang.String OSS_OBJECT_NAME;

        public final static java.lang.String PASSWORD;

        public final static java.lang.String RAM_ROLE;

        public final static java.lang.String RAM_USER;

        public final static java.lang.String RATE_CONTROL;

        public final static java.lang.String RDS_ENGINE_ID;

        public final static java.lang.String RDS_ENGINE_VERSION;

        public final static java.lang.String RDS_INSTANCE_ID;

        public final static java.lang.String RDS_INSTANCE_TYPE;

        public final static java.lang.String REDIS_INSTANCE_TYPE;

        public final static java.lang.String RESOURCE_MANAGER_ACCOUNT;

        public final static java.lang.String RESOURCE_MANAGER_FOLDER;

        public final static java.lang.String SLB_ACL_ID;

        public final static java.lang.String SLB_CERTIFICATE;

        public final static java.lang.String SLB_INSTANCE_ID;

        public final static java.lang.String SLB_INSTANCE_TYPE;

        public final static java.lang.String TAGS;

        public final static java.lang.String TARGETS;

        public final static java.lang.String TEXT_AREA;

        public final static java.lang.String TIME_TRIGGER_WEEKLY;

        public final static java.lang.String TIME_ZONE;

        public final static java.lang.String VPC_CIDR_BLOCK;

        public final static java.lang.String VPC_NAT_GATEWAY_ID;

        public final static java.lang.String VPC_ROUTER_ROUTE_TABLE_ID;

        public final static java.lang.String VSWITCH_CIDR_BLOCK;
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.core.RosParameter}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.core.RosParameter> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private com.aliyun.ros.cdk.core.RosParameterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            this.scope = scope;
            this.id = id;
        }

        /**
         * @return {@code this}
         * @param allowedPattern This parameter is required.
         */
        public Builder allowedPattern(final java.lang.String allowedPattern) {
            this.props().allowedPattern(allowedPattern);
            return this;
        }

        /**
         * @return {@code this}
         * @param allowedValues This parameter is required.
         */
        public Builder allowedValues(final java.util.List<? extends java.lang.Object> allowedValues) {
            this.props().allowedValues(allowedValues);
            return this;
        }

        /**
         * @return {@code this}
         * @param associationProperty This parameter is required.
         */
        public Builder associationProperty(final java.lang.String associationProperty) {
            this.props().associationProperty(associationProperty);
            return this;
        }

        /**
         * @return {@code this}
         * @param associationPropertyMetadata This parameter is required.
         */
        public Builder associationPropertyMetadata(final java.util.Map<java.lang.String, ? extends java.lang.Object> associationPropertyMetadata) {
            this.props().associationPropertyMetadata(associationPropertyMetadata);
            return this;
        }

        /**
         * @return {@code this}
         * @param confirm This parameter is required.
         */
        public Builder confirm(final java.lang.Boolean confirm) {
            this.props().confirm(confirm);
            return this;
        }

        /**
         * @return {@code this}
         * @param constraintDescription This parameter is required.
         */
        public Builder constraintDescription(final java.lang.String constraintDescription) {
            this.props().constraintDescription(constraintDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param constraintDescription This parameter is required.
         */
        public Builder constraintDescription(final java.util.Map<java.lang.String, java.lang.String> constraintDescription) {
            this.props().constraintDescription(constraintDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultValue This parameter is required.
         */
        public Builder defaultValue(final java.lang.Object defaultValue) {
            this.props().defaultValue(defaultValue);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.util.Map<java.lang.String, java.lang.String> description) {
            this.props().description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param label This parameter is required.
         */
        public Builder label(final java.lang.String label) {
            this.props().label(label);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxLength This parameter is required.
         */
        public Builder maxLength(final java.lang.Number maxLength) {
            this.props().maxLength(maxLength);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxValue This parameter is required.
         */
        public Builder maxValue(final java.lang.Number maxValue) {
            this.props().maxValue(maxValue);
            return this;
        }

        /**
         * @return {@code this}
         * @param minLength This parameter is required.
         */
        public Builder minLength(final java.lang.Number minLength) {
            this.props().minLength(minLength);
            return this;
        }

        /**
         * @return {@code this}
         * @param minValue This parameter is required.
         */
        public Builder minValue(final java.lang.Number minValue) {
            this.props().minValue(minValue);
            return this;
        }

        /**
         * @return {@code this}
         * @param noEcho This parameter is required.
         */
        public Builder noEcho(final java.lang.Boolean noEcho) {
            this.props().noEcho(noEcho);
            return this;
        }

        /**
         * @return {@code this}
         * @param textArea This parameter is required.
         */
        public Builder textArea(final java.lang.Boolean textArea) {
            this.props().textArea(textArea);
            return this;
        }

        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.RosParameterType type) {
            this.props().type(type);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.core.RosParameter}.
         */
        @Override
        public com.aliyun.ros.cdk.core.RosParameter build() {
            return new com.aliyun.ros.cdk.core.RosParameter(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null
            );
        }

        private com.aliyun.ros.cdk.core.RosParameterProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.core.RosParameterProps.Builder();
            }
            return this.props;
        }
    }
}
