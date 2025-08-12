package com.aliyun.ros.cdk.ddospro;

/**
 * Properties for defining a <code>RosWebRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-webrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.452Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.RosWebRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosWebRuleProps.Jsii$Proxy.class)
public interface RosWebRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomain();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRsType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRules();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefenseId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpsExt() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosWebRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosWebRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosWebRuleProps> {
        java.lang.Object domain;
        java.lang.Object rsType;
        java.lang.Object rules;
        java.lang.Object defenseId;
        java.lang.Object httpsExt;
        java.lang.Object instanceIds;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link RosWebRuleProps#getDomain}
         * @param domain the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(java.lang.String domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link RosWebRuleProps#getDomain}
         * @param domain the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link RosWebRuleProps#getRsType}
         * @param rsType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder rsType(java.lang.Number rsType) {
            this.rsType = rsType;
            return this;
        }

        /**
         * Sets the value of {@link RosWebRuleProps#getRsType}
         * @param rsType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder rsType(com.aliyun.ros.cdk.core.IResolvable rsType) {
            this.rsType = rsType;
            return this;
        }

        /**
         * Sets the value of {@link RosWebRuleProps#getRules}
         * @param rules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder rules(java.lang.String rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link RosWebRuleProps#getRules}
         * @param rules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder rules(com.aliyun.ros.cdk.core.IResolvable rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link RosWebRuleProps#getDefenseId}
         * @param defenseId the value to be set.
         * @return {@code this}
         */
        public Builder defenseId(java.lang.String defenseId) {
            this.defenseId = defenseId;
            return this;
        }

        /**
         * Sets the value of {@link RosWebRuleProps#getDefenseId}
         * @param defenseId the value to be set.
         * @return {@code this}
         */
        public Builder defenseId(com.aliyun.ros.cdk.core.IResolvable defenseId) {
            this.defenseId = defenseId;
            return this;
        }

        /**
         * Sets the value of {@link RosWebRuleProps#getHttpsExt}
         * @param httpsExt the value to be set.
         * @return {@code this}
         */
        public Builder httpsExt(java.lang.String httpsExt) {
            this.httpsExt = httpsExt;
            return this;
        }

        /**
         * Sets the value of {@link RosWebRuleProps#getHttpsExt}
         * @param httpsExt the value to be set.
         * @return {@code this}
         */
        public Builder httpsExt(com.aliyun.ros.cdk.core.IResolvable httpsExt) {
            this.httpsExt = httpsExt;
            return this;
        }

        /**
         * Sets the value of {@link RosWebRuleProps#getInstanceIds}
         * @param instanceIds the value to be set.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosWebRuleProps#getInstanceIds}
         * @param instanceIds the value to be set.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosWebRuleProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosWebRuleProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosWebRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosWebRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosWebRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosWebRuleProps {
        private final java.lang.Object domain;
        private final java.lang.Object rsType;
        private final java.lang.Object rules;
        private final java.lang.Object defenseId;
        private final java.lang.Object httpsExt;
        private final java.lang.Object instanceIds;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rsType = software.amazon.jsii.Kernel.get(this, "rsType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rules = software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defenseId = software.amazon.jsii.Kernel.get(this, "defenseId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpsExt = software.amazon.jsii.Kernel.get(this, "httpsExt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domain = java.util.Objects.requireNonNull(builder.domain, "domain is required");
            this.rsType = java.util.Objects.requireNonNull(builder.rsType, "rsType is required");
            this.rules = java.util.Objects.requireNonNull(builder.rules, "rules is required");
            this.defenseId = builder.defenseId;
            this.httpsExt = builder.httpsExt;
            this.instanceIds = builder.instanceIds;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getDomain() {
            return this.domain;
        }

        @Override
        public final java.lang.Object getRsType() {
            return this.rsType;
        }

        @Override
        public final java.lang.Object getRules() {
            return this.rules;
        }

        @Override
        public final java.lang.Object getDefenseId() {
            return this.defenseId;
        }

        @Override
        public final java.lang.Object getHttpsExt() {
            return this.httpsExt;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
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

            data.set("domain", om.valueToTree(this.getDomain()));
            data.set("rsType", om.valueToTree(this.getRsType()));
            data.set("rules", om.valueToTree(this.getRules()));
            if (this.getDefenseId() != null) {
                data.set("defenseId", om.valueToTree(this.getDefenseId()));
            }
            if (this.getHttpsExt() != null) {
                data.set("httpsExt", om.valueToTree(this.getHttpsExt()));
            }
            if (this.getInstanceIds() != null) {
                data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddospro.RosWebRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosWebRuleProps.Jsii$Proxy that = (RosWebRuleProps.Jsii$Proxy) o;

            if (!domain.equals(that.domain)) return false;
            if (!rsType.equals(that.rsType)) return false;
            if (!rules.equals(that.rules)) return false;
            if (this.defenseId != null ? !this.defenseId.equals(that.defenseId) : that.defenseId != null) return false;
            if (this.httpsExt != null ? !this.httpsExt.equals(that.httpsExt) : that.httpsExt != null) return false;
            if (this.instanceIds != null ? !this.instanceIds.equals(that.instanceIds) : that.instanceIds != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domain.hashCode();
            result = 31 * result + (this.rsType.hashCode());
            result = 31 * result + (this.rules.hashCode());
            result = 31 * result + (this.defenseId != null ? this.defenseId.hashCode() : 0);
            result = 31 * result + (this.httpsExt != null ? this.httpsExt.hashCode() : 0);
            result = 31 * result + (this.instanceIds != null ? this.instanceIds.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
