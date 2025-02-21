package com.aliyun.ros.cdk.core;

/**
 * A ROS parameter.
 * <p>
 * Parameters enable you to input custom values to your template each time you create or
 * update a stack.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:10.905Z")
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
            ACR_NAMESPACE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ACR_NAMESPACE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ACR_REPO_ATTRIBUTE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ACR_REPO_ATTRIBUTE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ACR_REPO_TAG = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ACR_REPO_TAG", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ALB_ACL_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ALB_ACL_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ALB_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ALB_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ALB_LOAD_BALANCER_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ALB_LOAD_BALANCER_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ALERT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ALERT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ARRAY_ITEMS = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ARRAY_ITEMS", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ARRAY_TABLE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ARRAY_TABLE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            AUTO_COMPLETE_INPUT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "AUTO_COMPLETE_INPUT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            BOOLEAN = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "BOOLEAN", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            BSS_PRICING_MODULE_CODE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "BSS_PRICING_MODULE_CODE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CAS_CERTIFICATE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CAS_CERTIFICATE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CAS_CERTIFICATE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CAS_CERTIFICATE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CASCADER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CASCADER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CEN_INSTANCE_CEN_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CEN_INSTANCE_CEN_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CEN_TRANSIT_ROUTER_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CEN_TRANSIT_ROUTER_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CHARGE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CHARGE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CMS_ALARM_METRIC_SELECTOR = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CMS_ALARM_METRIC_SELECTOR", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CMS_ALARM_RULE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CMS_ALARM_RULE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CMS_ALARM_SILENCE_TIME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CMS_ALARM_SILENCE_TIME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CMS_ALARM_TRIGGER_RESOURCES = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CMS_ALARM_TRIGGER_RESOURCES", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CMS_EVENT_FILTER_RULE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CMS_EVENT_FILTER_RULE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CMS_EVENT_LEVEL = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CMS_EVENT_LEVEL", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CMS_EVENT_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CMS_EVENT_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CMS_PRODUCT_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CMS_PRODUCT_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CODE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CODE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            COMMA_DELIMITED_LIST = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "COMMA_DELIMITED_LIST", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            COMPUTE_NEST_ARTIFACT_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "COMPUTE_NEST_ARTIFACT_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            COMPUTE_NEST_ARTIFACT_ID_VERSION = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "COMPUTE_NEST_ARTIFACT_ID_VERSION", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            COMPUTER_NEST_SERVICE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "COMPUTER_NEST_SERVICE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            COMPUTER_NEST_SERVICE_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "COMPUTER_NEST_SERVICE_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            COMPUTER_NEST_SUPPLIER_SERVICE_VERSION = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "COMPUTER_NEST_SUPPLIER_SERVICE_VERSION", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CR_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CR_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CR_NAMESPACE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CR_NAMESPACE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CR_REPOSITORY_REPO_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CR_REPOSITORY_REPO_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CR_REPOSITORY_TAG = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CR_REPOSITORY_TAG", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CRON = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CRON", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CS_CLUSTER_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CS_CLUSTER_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CS_CLUSTER_NODE_POOL = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CS_CLUSTER_NODE_POOL", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            CS_MANAGED_KUBERNETES_CLUSTER_SERVICE_CIDR = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "CS_MANAGED_KUBERNETES_CLUSTER_SERVICE_CIDR", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            DASH_VECTOR_API_KEY = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "DASH_VECTOR_API_KEY", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            DATE_PICKER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "DATE_PICKER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            DATE_TIME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "DATE_TIME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            DNS_DOMAIN_VALIDATE_DOMAIN = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "DNS_DOMAIN_VALIDATE_DOMAIN", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            DOMAIN_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "DOMAIN_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            EAS_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "EAS_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            EAS_RESOURCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "EAS_RESOURCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECD_BUNDLE_DESKTOP_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECD_BUNDLE_DESKTOP_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECI_CONTAINER_GROUP_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECI_CONTAINER_GROUP_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_AUTO_SNAPSHOT_POLICY_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_AUTO_SNAPSHOT_POLICY_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_COMMAND_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_COMMAND_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_DATA_DISK_CATEGORY = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_DATA_DISK_CATEGORY", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_DEPLOYMENT_SET_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_DEPLOYMENT_SET_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_DISK_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_DISK_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_IMAGE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_IMAGE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_ATTRIBUTE_SELECTOR = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_ATTRIBUTE_SELECTOR", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_IMAGE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_IMAGE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_MAX_BANDWIDTH_IN = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_MAX_BANDWIDTH_IN", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_OS_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_OS_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_PASSWORD = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_PASSWORD", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_PROPERTY_EDITOR = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_PROPERTY_EDITOR", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_RENEW_PERIOD = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_RENEW_PERIOD", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_STOP_MODE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_STOP_MODE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_TYPE_AVAILABLE_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_TYPE_AVAILABLE_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_INSTANCE_ZONE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_ZONE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_KEY_PAIR_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_KEY_PAIR_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_LAUNCH_TEMPLATE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_LAUNCH_TEMPLATE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_LAUNCH_TEMPLATE_VERSION = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_LAUNCH_TEMPLATE_VERSION", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_MANAGED_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_MANAGED_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_RAM_ROLE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_RAM_ROLE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_REGION_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_REGION_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_REGION_ID_DEPLOY = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_REGION_ID_DEPLOY", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_RESOURCE_GROUP_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_RESOURCE_GROUP_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_SECURITY_GROUP_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_SECURITY_GROUP_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_SECURITY_GROUP_PORT_RANGE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_SECURITY_GROUP_PORT_RANGE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_SNAPSHOT_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_SNAPSHOT_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_SYSTEM_DISK_CATEGORY = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_SYSTEM_DISK_CATEGORY", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_TAG = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_TAG", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_TARGET_REGION_IDS = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_TARGET_REGION_IDS", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_VPC_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_VPC_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_VSWITCH = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_VSWITCH", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_VSWITCH_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_VSWITCH_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_ZONE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_ZONE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            EDITABLE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "EDITABLE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            EDITABLE_POPOVER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "EDITABLE_POPOVER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            EHPC_CLUSTER_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "EHPC_CLUSTER_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            EHPC_FILE_SYSTEM_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "EHPC_FILE_SYSTEM_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ELASTICSEARCH_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ELASTICSEARCH_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            EMR_ECS_CLUSTER_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "EMR_ECS_CLUSTER_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ESS_AUTO_SCALING_GROUP_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ESS_AUTO_SCALING_GROUP_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ESS_ECI_SCALING_CONFIGURATION_CONTAINER_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ESS_ECI_SCALING_CONFIGURATION_CONTAINER_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ESS_ECI_SCALING_CONFIGURATION_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ESS_ECI_SCALING_CONFIGURATION_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ESS_SCALING_CONFIGURATION_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ESS_SCALING_CONFIGURATION_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            FC_FUNCTION_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "FC_FUNCTION_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            FC_SERVICE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "FC_SERVICE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            FC3_FUNCTION_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "FC3_FUNCTION_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            FILE_CONTENT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "FILE_CONTENT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            FLOW_CONNECTION_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "FLOW_CONNECTION_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            FLOW_ORGANIZATION_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "FLOW_ORGANIZATION_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            FORM_GRID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "FORM_GRID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            FORM_GROUP_COLLAPSE_PAN = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "FORM_GROUP_COLLAPSE_PAN", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            FORM_ITEM = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "FORM_ITEM", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            FORM_ITEM_GROUP = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "FORM_ITEM_GROUP", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            FORM_LAYOUT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "FORM_LAYOUT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            GMT_ZONE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "GMT_ZONE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            HOLOGRES_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "HOLOGRES_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            INFLUX_DB_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "INFLUX_DB_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            INPUT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "INPUT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            INTEGER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "INTEGER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            JSON = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "JSON", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            KAFKA_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "KAFKA_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            LINDORM_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "LINDORM_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            LIST = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "LIST", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            LIST_PARAMETER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "LIST_PARAMETER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            LIST_PARAMETERS = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "LIST_PARAMETERS", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            MONGODB_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "MONGODB_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            NAS_FILE_SYSTEM_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "NAS_FILE_SYSTEM_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            NAS_FILE_SYSTEM_MOUNT_TARGET_DOMAIN = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "NAS_FILE_SYSTEM_MOUNT_TARGET_DOMAIN", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            NEST_SERVICE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "NEST_SERVICE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            NEST_SERVICE_VERSION = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "NEST_SERVICE_VERSION", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            NLB_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "NLB_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            NLB_LOAD_BALANCER_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "NLB_LOAD_BALANCER_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            NLB_ZONE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "NLB_ZONE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            NUMBER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "NUMBER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            NUMBER_PICKER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "NUMBER_PICKER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_COMMAND_CONTENT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_COMMAND_CONTENT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_COMPONENT_BANDWIDTH_UPGRADE_DURATION_HOUR = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_COMPONENT_BANDWIDTH_UPGRADE_DURATION_HOUR", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_COMPONENT_CLEAN_UP_INFO = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_COMPONENT_CLEAN_UP_INFO", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_COMPONENT_ON_OFF_TIME_LINE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_COMPONENT_ON_OFF_TIME_LINE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_COMPONENT_ON_OFF_TIMES = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_COMPONENT_ON_OFF_TIMES", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_COMPONENT_OPERATION_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_COMPONENT_OPERATION_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_COMPONENT_PRIVATE_TEMPLATE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_COMPONENT_PRIVATE_TEMPLATE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_COMPONENT_SECTION_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_COMPONENT_SECTION_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_COMPONENT_TARGET_IMAGE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_COMPONENT_TARGET_IMAGE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_COMPONENT_TIMER_TRIGGER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_COMPONENT_TIMER_TRIGGER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_COMPONENT_TRANSIT_INSTANCE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_COMPONENT_TRANSIT_INSTANCE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_FILE_URL = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_FILE_URL", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_PACKAGE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_PACKAGE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_PACKAGE_VERSION = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_PACKAGE_VERSION", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_PARAMETER_VALUE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_PARAMETER_VALUE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_PATCH_BASE_LINE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_PATCH_BASE_LINE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_SECRET_PARAMETER_VALUE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_SECRET_PARAMETER_VALUE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_SERVICE_ROLE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_SERVICE_ROLE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_TEMPLATE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_TEMPLATE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OOS_TEMPLATE_VERSION = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OOS_TEMPLATE_VERSION", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OSS_BUCKET_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OSS_BUCKET_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OSS_BUCKET_OBJECT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OSS_BUCKET_OBJECT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            OSS_OBJECT_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "OSS_OBJECT_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            PARSE_TEXT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "PARSE_TEXT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            PASSWORD = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "PASSWORD", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            PAY_PERIOD = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "PAY_PERIOD", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            PAY_PERIOD_UNIT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "PAY_PERIOD_UNIT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            POLARDB_DB_CLUSTER_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "POLARDB_DB_CLUSTER_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            POLARDB_DB_NODE_CLASS = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "POLARDB_DB_NODE_CLASS", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RADIO = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RADIO", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RAM_ROLE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RAM_ROLE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RAM_USER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RAM_USER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RATE_CONTROL = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RATE_CONTROL", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RDS_ENGINE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RDS_ENGINE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RDS_ENGINE_VERSION = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RDS_ENGINE_VERSION", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RDS_INSTANCE_ACCOUNT_PASSWORD = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RDS_INSTANCE_ACCOUNT_PASSWORD", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RDS_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RDS_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RDS_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RDS_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            READ_ONLY = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "READ_ONLY", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            READ_ONLY_ITEM = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "READ_ONLY_ITEM", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            REDIS_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "REDIS_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            REDIS_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "REDIS_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            REGION_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "REGION_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RESOURCE_MANAGER_ACCOUNT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RESOURCE_MANAGER_ACCOUNT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RESOURCE_MANAGER_FOLDER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RESOURCE_MANAGER_FOLDER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ROS_TYPE_META_LIST = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ROS_TYPE_META_LIST", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SELECT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SELECT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SERVICE_CATA_LOG_LAUNCH_OPTION_PORTFOLIO_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SERVICE_CATA_LOG_LAUNCH_OPTION_PORTFOLIO_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SERVICE_CATA_LOG_LAUNCH_PRODUCT_VERSION_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SERVICE_CATA_LOG_LAUNCH_PRODUCT_VERSION_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SLB_ACL_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SLB_ACL_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SLB_CERTIFICATE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SLB_CERTIFICATE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SLB_INSTANCE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SLB_INSTANCE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SLB_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SLB_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SLB_LOAD_BALANCER_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SLB_LOAD_BALANCER_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SLB_LOAD_BALANCER_ZONE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SLB_LOAD_BALANCER_ZONE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            STRING = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "STRING", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SWITCH = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SWITCH", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TAG_KEY = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TAG_KEY", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TAG_VALUE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TAG_VALUE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TAGS = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TAGS", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TARGETS = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TARGETS", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TEMPLATE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TEMPLATE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TEMPLATE_PARAMETER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TEMPLATE_PARAMETER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TEXT_AREA = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TEXT_AREA", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TIME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TIME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TIME_TRIGGER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TIME_TRIGGER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TIME_TRIGGER_WEEKLY = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TIME_TRIGGER_WEEKLY", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            TIME_ZONE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "TIME_ZONE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            USER_ACCOUNT_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "USER_ACCOUNT_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            USER_ACCOUNT_IDS = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "USER_ACCOUNT_IDS", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            USER_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "USER_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            VPC_CIDR_BLOCK = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "VPC_CIDR_BLOCK", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            VPC_EIP_ALLOCATION_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "VPC_EIP_ALLOCATION_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            VPC_NAT_GATEWAY_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "VPC_NAT_GATEWAY_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            VPC_ROUTER_ROUTE_TABLE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "VPC_ROUTER_ROUTE_TABLE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            VPC_VSWITCH_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "VPC_VSWITCH_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            VPC_ZONE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "VPC_ZONE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            VSWITCH_CIDR_BLOCK = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "VSWITCH_CIDR_BLOCK", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ZONE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ZONE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        public AssociationProperty() {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
        }

        public final static java.lang.String ACR_NAMESPACE_NAME;

        public final static java.lang.String ACR_REPO_ATTRIBUTE;

        public final static java.lang.String ACR_REPO_TAG;

        public final static java.lang.String ALB_ACL_ID;

        public final static java.lang.String ALB_INSTANCE_ID;

        public final static java.lang.String ALB_LOAD_BALANCER_ID;

        public final static java.lang.String ALERT;

        public final static java.lang.String ARRAY_ITEMS;

        public final static java.lang.String ARRAY_TABLE;

        public final static java.lang.String AUTO_COMPLETE_INPUT;

        public final static java.lang.String BOOLEAN;

        public final static java.lang.String BSS_PRICING_MODULE_CODE;

        public final static java.lang.String CAS_CERTIFICATE;

        public final static java.lang.String CAS_CERTIFICATE_ID;

        public final static java.lang.String CASCADER;

        public final static java.lang.String CEN_INSTANCE_CEN_ID;

        public final static java.lang.String CEN_TRANSIT_ROUTER_ID;

        public final static java.lang.String CHARGE_TYPE;

        public final static java.lang.String CMS_ALARM_METRIC_SELECTOR;

        public final static java.lang.String CMS_ALARM_RULE;

        public final static java.lang.String CMS_ALARM_SILENCE_TIME;

        public final static java.lang.String CMS_ALARM_TRIGGER_RESOURCES;

        public final static java.lang.String CMS_EVENT_FILTER_RULE;

        public final static java.lang.String CMS_EVENT_LEVEL;

        public final static java.lang.String CMS_EVENT_NAME;

        public final static java.lang.String CMS_PRODUCT_TYPE;

        public final static java.lang.String CODE;

        public final static java.lang.String COMMA_DELIMITED_LIST;

        public final static java.lang.String COMPUTE_NEST_ARTIFACT_ID;

        public final static java.lang.String COMPUTE_NEST_ARTIFACT_ID_VERSION;

        public final static java.lang.String COMPUTER_NEST_SERVICE_ID;

        public final static java.lang.String COMPUTER_NEST_SERVICE_INSTANCE_ID;

        public final static java.lang.String COMPUTER_NEST_SUPPLIER_SERVICE_VERSION;

        public final static java.lang.String CR_INSTANCE_ID;

        public final static java.lang.String CR_NAMESPACE_NAME;

        public final static java.lang.String CR_REPOSITORY_REPO_NAME;

        public final static java.lang.String CR_REPOSITORY_TAG;

        public final static java.lang.String CRON;

        public final static java.lang.String CS_CLUSTER_ID;

        public final static java.lang.String CS_CLUSTER_NODE_POOL;

        public final static java.lang.String CS_MANAGED_KUBERNETES_CLUSTER_SERVICE_CIDR;

        public final static java.lang.String DASH_VECTOR_API_KEY;

        public final static java.lang.String DATE_PICKER;

        public final static java.lang.String DATE_TIME;

        public final static java.lang.String DNS_DOMAIN_VALIDATE_DOMAIN;

        public final static java.lang.String DOMAIN_NAME;

        public final static java.lang.String EAS_INSTANCE_TYPE;

        public final static java.lang.String EAS_RESOURCE_ID;

        public final static java.lang.String ECD_BUNDLE_DESKTOP_TYPE;

        public final static java.lang.String ECI_CONTAINER_GROUP_ID;

        public final static java.lang.String ECS_AUTO_SNAPSHOT_POLICY_ID;

        public final static java.lang.String ECS_COMMAND_ID;

        public final static java.lang.String ECS_DATA_DISK_CATEGORY;

        public final static java.lang.String ECS_DEPLOYMENT_SET_ID;

        public final static java.lang.String ECS_DISK_ID;

        public final static java.lang.String ECS_IMAGE_ID;

        public final static java.lang.String ECS_INSTANCE;

        public final static java.lang.String ECS_INSTANCE_ATTRIBUTE_SELECTOR;

        public final static java.lang.String ECS_INSTANCE_ID;

        public final static java.lang.String ECS_INSTANCE_IMAGE_ID;

        public final static java.lang.String ECS_INSTANCE_MAX_BANDWIDTH_IN;

        public final static java.lang.String ECS_INSTANCE_OS_TYPE;

        public final static java.lang.String ECS_INSTANCE_PASSWORD;

        public final static java.lang.String ECS_INSTANCE_PROPERTY_EDITOR;

        public final static java.lang.String ECS_INSTANCE_RENEW_PERIOD;

        public final static java.lang.String ECS_INSTANCE_STOP_MODE;

        public final static java.lang.String ECS_INSTANCE_TYPE;

        public final static java.lang.String ECS_INSTANCE_TYPE_AVAILABLE_INSTANCE_TYPE;

        public final static java.lang.String ECS_INSTANCE_ZONE_ID;

        public final static java.lang.String ECS_KEY_PAIR_NAME;

        public final static java.lang.String ECS_LAUNCH_TEMPLATE_ID;

        public final static java.lang.String ECS_LAUNCH_TEMPLATE_VERSION;

        public final static java.lang.String ECS_MANAGED_INSTANCE_ID;

        public final static java.lang.String ECS_RAM_ROLE;

        public final static java.lang.String ECS_REGION_ID;

        public final static java.lang.String ECS_REGION_ID_DEPLOY;

        public final static java.lang.String ECS_RESOURCE_GROUP_ID;

        public final static java.lang.String ECS_SECURITY_GROUP_ID;

        public final static java.lang.String ECS_SECURITY_GROUP_PORT_RANGE;

        public final static java.lang.String ECS_SNAPSHOT_ID;

        public final static java.lang.String ECS_SYSTEM_DISK_CATEGORY;

        public final static java.lang.String ECS_TAG;

        public final static java.lang.String ECS_TARGET_REGION_IDS;

        public final static java.lang.String ECS_VPC_ID;

        public final static java.lang.String ECS_VSWITCH;

        public final static java.lang.String ECS_VSWITCH_ID;

        public final static java.lang.String ECS_ZONE_ID;

        public final static java.lang.String EDITABLE;

        public final static java.lang.String EDITABLE_POPOVER;

        public final static java.lang.String EHPC_CLUSTER_ID;

        public final static java.lang.String EHPC_FILE_SYSTEM_ID;

        public final static java.lang.String EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN;

        public final static java.lang.String ELASTICSEARCH_INSTANCE_TYPE;

        public final static java.lang.String EMR_ECS_CLUSTER_ID;

        public final static java.lang.String ESS_AUTO_SCALING_GROUP_ID;

        public final static java.lang.String ESS_ECI_SCALING_CONFIGURATION_CONTAINER_NAME;

        public final static java.lang.String ESS_ECI_SCALING_CONFIGURATION_ID;

        public final static java.lang.String ESS_SCALING_CONFIGURATION_ID;

        public final static java.lang.String FC_FUNCTION_NAME;

        public final static java.lang.String FC_SERVICE_NAME;

        public final static java.lang.String FC3_FUNCTION_NAME;

        public final static java.lang.String FILE_CONTENT;

        public final static java.lang.String FLOW_CONNECTION_ID;

        public final static java.lang.String FLOW_ORGANIZATION_ID;

        public final static java.lang.String FORM_GRID;

        public final static java.lang.String FORM_GROUP_COLLAPSE_PAN;

        public final static java.lang.String FORM_ITEM;

        public final static java.lang.String FORM_ITEM_GROUP;

        public final static java.lang.String FORM_LAYOUT;

        public final static java.lang.String GMT_ZONE;

        public final static java.lang.String HOLOGRES_INSTANCE_ID;

        public final static java.lang.String INFLUX_DB_INSTANCE_TYPE;

        public final static java.lang.String INPUT;

        public final static java.lang.String INTEGER;

        public final static java.lang.String JSON;

        public final static java.lang.String KAFKA_INSTANCE_ID;

        public final static java.lang.String LINDORM_INSTANCE_ID;

        public final static java.lang.String LIST;

        public final static java.lang.String LIST_PARAMETER;

        public final static java.lang.String LIST_PARAMETERS;

        public final static java.lang.String MONGODB_INSTANCE_TYPE;

        public final static java.lang.String NAS_FILE_SYSTEM_ID;

        public final static java.lang.String NAS_FILE_SYSTEM_MOUNT_TARGET_DOMAIN;

        public final static java.lang.String NEST_SERVICE_ID;

        public final static java.lang.String NEST_SERVICE_VERSION;

        public final static java.lang.String NLB_INSTANCE_ID;

        public final static java.lang.String NLB_LOAD_BALANCER_ID;

        public final static java.lang.String NLB_ZONE_ID;

        public final static java.lang.String NUMBER;

        public final static java.lang.String NUMBER_PICKER;

        public final static java.lang.String OOS_COMMAND_CONTENT;

        public final static java.lang.String OOS_COMPONENT_BANDWIDTH_UPGRADE_DURATION_HOUR;

        public final static java.lang.String OOS_COMPONENT_CLEAN_UP_INFO;

        public final static java.lang.String OOS_COMPONENT_ON_OFF_TIME_LINE;

        public final static java.lang.String OOS_COMPONENT_ON_OFF_TIMES;

        public final static java.lang.String OOS_COMPONENT_OPERATION_TYPE;

        public final static java.lang.String OOS_COMPONENT_PRIVATE_TEMPLATE_NAME;

        public final static java.lang.String OOS_COMPONENT_SECTION_TYPE;

        public final static java.lang.String OOS_COMPONENT_TARGET_IMAGE_NAME;

        public final static java.lang.String OOS_COMPONENT_TIMER_TRIGGER;

        public final static java.lang.String OOS_COMPONENT_TRANSIT_INSTANCE;

        public final static java.lang.String OOS_FILE_URL;

        public final static java.lang.String OOS_PACKAGE_NAME;

        public final static java.lang.String OOS_PACKAGE_VERSION;

        public final static java.lang.String OOS_PARAMETER_VALUE;

        public final static java.lang.String OOS_PATCH_BASE_LINE_NAME;

        public final static java.lang.String OOS_SECRET_PARAMETER_VALUE;

        public final static java.lang.String OOS_SERVICE_ROLE;

        public final static java.lang.String OOS_TEMPLATE_NAME;

        public final static java.lang.String OOS_TEMPLATE_VERSION;

        public final static java.lang.String OSS_BUCKET_NAME;

        public final static java.lang.String OSS_BUCKET_OBJECT;

        public final static java.lang.String OSS_OBJECT_NAME;

        public final static java.lang.String PARSE_TEXT;

        public final static java.lang.String PASSWORD;

        public final static java.lang.String PAY_PERIOD;

        public final static java.lang.String PAY_PERIOD_UNIT;

        public final static java.lang.String POLARDB_DB_CLUSTER_ID;

        public final static java.lang.String POLARDB_DB_NODE_CLASS;

        public final static java.lang.String RADIO;

        public final static java.lang.String RAM_ROLE;

        public final static java.lang.String RAM_USER;

        public final static java.lang.String RATE_CONTROL;

        public final static java.lang.String RDS_ENGINE_ID;

        public final static java.lang.String RDS_ENGINE_VERSION;

        public final static java.lang.String RDS_INSTANCE_ACCOUNT_PASSWORD;

        public final static java.lang.String RDS_INSTANCE_ID;

        public final static java.lang.String RDS_INSTANCE_TYPE;

        public final static java.lang.String READ_ONLY;

        public final static java.lang.String READ_ONLY_ITEM;

        public final static java.lang.String REDIS_INSTANCE_ID;

        public final static java.lang.String REDIS_INSTANCE_TYPE;

        public final static java.lang.String REGION_ID;

        public final static java.lang.String RESOURCE_MANAGER_ACCOUNT;

        public final static java.lang.String RESOURCE_MANAGER_FOLDER;

        public final static java.lang.String ROS_TYPE_META_LIST;

        public final static java.lang.String SELECT;

        public final static java.lang.String SERVICE_CATA_LOG_LAUNCH_OPTION_PORTFOLIO_ID;

        public final static java.lang.String SERVICE_CATA_LOG_LAUNCH_PRODUCT_VERSION_ID;

        public final static java.lang.String SLB_ACL_ID;

        public final static java.lang.String SLB_CERTIFICATE;

        public final static java.lang.String SLB_INSTANCE_ID;

        public final static java.lang.String SLB_INSTANCE_TYPE;

        public final static java.lang.String SLB_LOAD_BALANCER_ID;

        public final static java.lang.String SLB_LOAD_BALANCER_ZONE_ID;

        public final static java.lang.String STRING;

        public final static java.lang.String SWITCH;

        public final static java.lang.String TAG_KEY;

        public final static java.lang.String TAG_VALUE;

        public final static java.lang.String TAGS;

        public final static java.lang.String TARGETS;

        public final static java.lang.String TEMPLATE_NAME;

        public final static java.lang.String TEMPLATE_PARAMETER;

        public final static java.lang.String TEXT_AREA;

        public final static java.lang.String TIME;

        public final static java.lang.String TIME_TRIGGER;

        public final static java.lang.String TIME_TRIGGER_WEEKLY;

        public final static java.lang.String TIME_ZONE;

        public final static java.lang.String USER_ACCOUNT_ID;

        public final static java.lang.String USER_ACCOUNT_IDS;

        public final static java.lang.String USER_ID;

        public final static java.lang.String VPC_CIDR_BLOCK;

        public final static java.lang.String VPC_EIP_ALLOCATION_ID;

        public final static java.lang.String VPC_NAT_GATEWAY_ID;

        public final static java.lang.String VPC_ROUTER_ROUTE_TABLE_ID;

        public final static java.lang.String VPC_VSWITCH_ID;

        public final static java.lang.String VPC_ZONE_ID;

        public final static java.lang.String VSWITCH_CIDR_BLOCK;

        public final static java.lang.String ZONE_ID;
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
         * @param placeholder This parameter is required.
         */
        public Builder placeholder(final java.lang.String placeholder) {
            this.props().placeholder(placeholder);
            return this;
        }
        /**
         * @return {@code this}
         * @param placeholder This parameter is required.
         */
        public Builder placeholder(final java.util.Map<java.lang.String, java.lang.String> placeholder) {
            this.props().placeholder(placeholder);
            return this;
        }

        /**
         * @return {@code this}
         * @param required This parameter is required.
         */
        public Builder required(final java.lang.Boolean required) {
            this.props().required(required);
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
