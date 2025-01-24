package com.aliyun.ros.cdk.ddospro;

/**
 * Properties for defining a <code>SchedulerRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-schedulerrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:36.890Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.SchedulerRuleProps")
@software.amazon.jsii.Jsii.Proxy(SchedulerRuleProps.Jsii$Proxy.class)
public interface SchedulerRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ruleName: The name of the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

    /**
     * Property rules: The details of the scheduling rule.
     * <p>
     * This parameter is a JSON string. The following list describes the fields in the value of the parameter:
     * Type: the address type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type. Valid values: A: IP address. CNAME: domain name
     * Value: the address of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type.
     * Priority: the priority of the scheduling rule. This field is required and must be of the integer type. Valid values: 0 to 100. A larger value indicates a higher priority.
     * ValueType: the type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the integer type. Valid values: 1: the IP address of the Anti-DDoS Pro or Anti-DDoS Premium instance. 2: the IP address of the interaction resource in the tiered protection scenario. 3: the IP address that is used to accelerate access in the network acceleration scenario. 5: the domain name that is configured in Alibaba Cloud CDN (CDN) in the CDN interaction scenario. 6 the IP address of the interaction resource in the cloud service interaction scenario
     * RegionId: the region where the interaction resource is deployed. This parameter must be specified when ValueType is set to 2. The value must be of the string type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRules();

    /**
     * Property ruleType: The type of the custom defense rule.
     * <p>
     * Valid values:
     * 2: tiered protection
     * 3: network acceleration
     * 5: CDN interaction
     * 6: cloud service interaction
     * 8: secure acceleration
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleType();

    /**
     * Property param: The details of the CDN interaction rule.
     * <p>
     * This parameter is a JSON string. The following list describes the fields in the value of the parameter:
     * ParamType: the type of the scheduling rule. This field is required and must be of the string type. Set the value to cdn. This indicates that you want to modify a CDN interaction rule.
     * ParamData: the values of parameters that you want to modify for the CDN interaction rule. This field is required and must be of the map type. ParamData contains the following parameters: Domain: the accelerated domain in CDN. This parameter is required and must be of the string type; Cname: the CNAME that is assigned to the accelerated domain. This parameter is required and must be of the string type; AccessQps: the queries per second (QPS) threshold that is used to switch service traffic to Anti-DDoS Pro or Anti-DDoS Premium. This parameter is required and must be of the integer type; UpstreamQps: the QPS threshold that is used to switch service traffic to CDN. This parameter is optional and must be of the integer type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParam() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management.
     * <p>
     * This parameter is empty by default, which indicates that the instance belongs to the default resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SchedulerRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SchedulerRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SchedulerRuleProps> {
        java.lang.Object ruleName;
        java.lang.Object rules;
        java.lang.Object ruleType;
        java.lang.Object param;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link SchedulerRuleProps#getRuleName}
         * @param ruleName Property ruleName: The name of the rule. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link SchedulerRuleProps#getRuleName}
         * @param ruleName Property ruleName: The name of the rule. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link SchedulerRuleProps#getRules}
         * @param rules Property rules: The details of the scheduling rule. This parameter is required.
         *              This parameter is a JSON string. The following list describes the fields in the value of the parameter:
         *              Type: the address type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type. Valid values: A: IP address. CNAME: domain name
         *              Value: the address of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type.
         *              Priority: the priority of the scheduling rule. This field is required and must be of the integer type. Valid values: 0 to 100. A larger value indicates a higher priority.
         *              ValueType: the type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the integer type. Valid values: 1: the IP address of the Anti-DDoS Pro or Anti-DDoS Premium instance. 2: the IP address of the interaction resource in the tiered protection scenario. 3: the IP address that is used to accelerate access in the network acceleration scenario. 5: the domain name that is configured in Alibaba Cloud CDN (CDN) in the CDN interaction scenario. 6 the IP address of the interaction resource in the cloud service interaction scenario
         *              RegionId: the region where the interaction resource is deployed. This parameter must be specified when ValueType is set to 2. The value must be of the string type.
         * @return {@code this}
         */
        public Builder rules(java.lang.String rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link SchedulerRuleProps#getRules}
         * @param rules Property rules: The details of the scheduling rule. This parameter is required.
         *              This parameter is a JSON string. The following list describes the fields in the value of the parameter:
         *              Type: the address type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type. Valid values: A: IP address. CNAME: domain name
         *              Value: the address of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type.
         *              Priority: the priority of the scheduling rule. This field is required and must be of the integer type. Valid values: 0 to 100. A larger value indicates a higher priority.
         *              ValueType: the type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the integer type. Valid values: 1: the IP address of the Anti-DDoS Pro or Anti-DDoS Premium instance. 2: the IP address of the interaction resource in the tiered protection scenario. 3: the IP address that is used to accelerate access in the network acceleration scenario. 5: the domain name that is configured in Alibaba Cloud CDN (CDN) in the CDN interaction scenario. 6 the IP address of the interaction resource in the cloud service interaction scenario
         *              RegionId: the region where the interaction resource is deployed. This parameter must be specified when ValueType is set to 2. The value must be of the string type.
         * @return {@code this}
         */
        public Builder rules(com.aliyun.ros.cdk.core.IResolvable rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link SchedulerRuleProps#getRuleType}
         * @param ruleType Property ruleType: The type of the custom defense rule. This parameter is required.
         *                 Valid values:
         *                 2: tiered protection
         *                 3: network acceleration
         *                 5: CDN interaction
         *                 6: cloud service interaction
         *                 8: secure acceleration
         * @return {@code this}
         */
        public Builder ruleType(java.lang.Number ruleType) {
            this.ruleType = ruleType;
            return this;
        }

        /**
         * Sets the value of {@link SchedulerRuleProps#getRuleType}
         * @param ruleType Property ruleType: The type of the custom defense rule. This parameter is required.
         *                 Valid values:
         *                 2: tiered protection
         *                 3: network acceleration
         *                 5: CDN interaction
         *                 6: cloud service interaction
         *                 8: secure acceleration
         * @return {@code this}
         */
        public Builder ruleType(com.aliyun.ros.cdk.core.IResolvable ruleType) {
            this.ruleType = ruleType;
            return this;
        }

        /**
         * Sets the value of {@link SchedulerRuleProps#getParam}
         * @param param Property param: The details of the CDN interaction rule.
         *              This parameter is a JSON string. The following list describes the fields in the value of the parameter:
         *              ParamType: the type of the scheduling rule. This field is required and must be of the string type. Set the value to cdn. This indicates that you want to modify a CDN interaction rule.
         *              ParamData: the values of parameters that you want to modify for the CDN interaction rule. This field is required and must be of the map type. ParamData contains the following parameters: Domain: the accelerated domain in CDN. This parameter is required and must be of the string type; Cname: the CNAME that is assigned to the accelerated domain. This parameter is required and must be of the string type; AccessQps: the queries per second (QPS) threshold that is used to switch service traffic to Anti-DDoS Pro or Anti-DDoS Premium. This parameter is required and must be of the integer type; UpstreamQps: the QPS threshold that is used to switch service traffic to CDN. This parameter is optional and must be of the integer type.
         * @return {@code this}
         */
        public Builder param(java.lang.String param) {
            this.param = param;
            return this;
        }

        /**
         * Sets the value of {@link SchedulerRuleProps#getParam}
         * @param param Property param: The details of the CDN interaction rule.
         *              This parameter is a JSON string. The following list describes the fields in the value of the parameter:
         *              ParamType: the type of the scheduling rule. This field is required and must be of the string type. Set the value to cdn. This indicates that you want to modify a CDN interaction rule.
         *              ParamData: the values of parameters that you want to modify for the CDN interaction rule. This field is required and must be of the map type. ParamData contains the following parameters: Domain: the accelerated domain in CDN. This parameter is required and must be of the string type; Cname: the CNAME that is assigned to the accelerated domain. This parameter is required and must be of the string type; AccessQps: the queries per second (QPS) threshold that is used to switch service traffic to Anti-DDoS Pro or Anti-DDoS Premium. This parameter is required and must be of the integer type; UpstreamQps: the QPS threshold that is used to switch service traffic to CDN. This parameter is optional and must be of the integer type.
         * @return {@code this}
         */
        public Builder param(com.aliyun.ros.cdk.core.IResolvable param) {
            this.param = param;
            return this;
        }

        /**
         * Sets the value of {@link SchedulerRuleProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management.
         *                        This parameter is empty by default, which indicates that the instance belongs to the default resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SchedulerRuleProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management.
         *                        This parameter is empty by default, which indicates that the instance belongs to the default resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SchedulerRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SchedulerRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SchedulerRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SchedulerRuleProps {
        private final java.lang.Object ruleName;
        private final java.lang.Object rules;
        private final java.lang.Object ruleType;
        private final java.lang.Object param;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rules = software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleType = software.amazon.jsii.Kernel.get(this, "ruleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.param = software.amazon.jsii.Kernel.get(this, "param", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
            this.rules = java.util.Objects.requireNonNull(builder.rules, "rules is required");
            this.ruleType = java.util.Objects.requireNonNull(builder.ruleType, "ruleType is required");
            this.param = builder.param;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getRules() {
            return this.rules;
        }

        @Override
        public final java.lang.Object getRuleType() {
            return this.ruleType;
        }

        @Override
        public final java.lang.Object getParam() {
            return this.param;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ruleName", om.valueToTree(this.getRuleName()));
            data.set("rules", om.valueToTree(this.getRules()));
            data.set("ruleType", om.valueToTree(this.getRuleType()));
            if (this.getParam() != null) {
                data.set("param", om.valueToTree(this.getParam()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddospro.SchedulerRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SchedulerRuleProps.Jsii$Proxy that = (SchedulerRuleProps.Jsii$Proxy) o;

            if (!ruleName.equals(that.ruleName)) return false;
            if (!rules.equals(that.rules)) return false;
            if (!ruleType.equals(that.ruleType)) return false;
            if (this.param != null ? !this.param.equals(that.param) : that.param != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ruleName.hashCode();
            result = 31 * result + (this.rules.hashCode());
            result = 31 * result + (this.ruleType.hashCode());
            result = 31 * result + (this.param != null ? this.param.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
