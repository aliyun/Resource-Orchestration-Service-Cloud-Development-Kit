package com.aliyun.ros.cdk.config;

/**
 * Properties for defining a <code>AggregateCompliancePack</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregatecompliancepack
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:50.404Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.AggregateCompliancePackProps")
@software.amazon.jsii.Jsii.Proxy(AggregateCompliancePackProps.Jsii$Proxy.class)
public interface AggregateCompliancePackProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property aggregatorId: Aggregator id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAggregatorId();

    /**
     * Property compliancePackName: Compliance package name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCompliancePackName();

    /**
     * Property configRules: List of rules in the compliance package.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConfigRules();

    /**
     * Property description: The description of compliance pack.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     * Property riskLevel: Compliance package risk level.
     * <p>
     * Value:
     * 1: High risk.
     * 2: Medium risk.
     * 3: Low risk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRiskLevel();

    /**
     * Property compliancePackTemplateId: Compliance package template ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompliancePackTemplateId() {
        return null;
    }

    /**
     * Property defaultEnable: Whether the rule supports quick activation.
     * <p>
     * Value:
     * true: This rule will be enabled when the compliance package is quickly enabled.
     * false (default): disable
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultEnable() {
        return null;
    }

    /**
     * Property excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExcludeResourceIdsScope() {
        return null;
    }

    /**
     * Property regionIdsScope: The compliance package only takes effect for resources in the specified region ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegionIdsScope() {
        return null;
    }

    /**
     * Property resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupIdsScope() {
        return null;
    }

    /**
     * Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagKeyScope() {
        return null;
    }

    /**
     * Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagValueScope() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AggregateCompliancePackProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AggregateCompliancePackProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AggregateCompliancePackProps> {
        java.lang.Object aggregatorId;
        java.lang.Object compliancePackName;
        java.lang.Object configRules;
        java.lang.Object description;
        java.lang.Object riskLevel;
        java.lang.Object compliancePackTemplateId;
        java.lang.Object defaultEnable;
        java.lang.Object excludeResourceIdsScope;
        java.lang.Object regionIdsScope;
        java.lang.Object resourceGroupIdsScope;
        java.lang.Object tagKeyScope;
        java.lang.Object tagValueScope;

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getAggregatorId}
         * @param aggregatorId Property aggregatorId: Aggregator id. This parameter is required.
         * @return {@code this}
         */
        public Builder aggregatorId(java.lang.String aggregatorId) {
            this.aggregatorId = aggregatorId;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getAggregatorId}
         * @param aggregatorId Property aggregatorId: Aggregator id. This parameter is required.
         * @return {@code this}
         */
        public Builder aggregatorId(com.aliyun.ros.cdk.core.IResolvable aggregatorId) {
            this.aggregatorId = aggregatorId;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getCompliancePackName}
         * @param compliancePackName Property compliancePackName: Compliance package name. This parameter is required.
         * @return {@code this}
         */
        public Builder compliancePackName(java.lang.String compliancePackName) {
            this.compliancePackName = compliancePackName;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getCompliancePackName}
         * @param compliancePackName Property compliancePackName: Compliance package name. This parameter is required.
         * @return {@code this}
         */
        public Builder compliancePackName(com.aliyun.ros.cdk.core.IResolvable compliancePackName) {
            this.compliancePackName = compliancePackName;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getConfigRules}
         * @param configRules Property configRules: List of rules in the compliance package. This parameter is required.
         * @return {@code this}
         */
        public Builder configRules(com.aliyun.ros.cdk.core.IResolvable configRules) {
            this.configRules = configRules;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getConfigRules}
         * @param configRules Property configRules: List of rules in the compliance package. This parameter is required.
         * @return {@code this}
         */
        public Builder configRules(java.util.List<? extends java.lang.Object> configRules) {
            this.configRules = configRules;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getDescription}
         * @param description Property description: The description of compliance pack. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getDescription}
         * @param description Property description: The description of compliance pack. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getRiskLevel}
         * @param riskLevel Property riskLevel: Compliance package risk level. This parameter is required.
         *                  Value:
         *                  1: High risk.
         *                  2: Medium risk.
         *                  3: Low risk.
         * @return {@code this}
         */
        public Builder riskLevel(java.lang.Number riskLevel) {
            this.riskLevel = riskLevel;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getRiskLevel}
         * @param riskLevel Property riskLevel: Compliance package risk level. This parameter is required.
         *                  Value:
         *                  1: High risk.
         *                  2: Medium risk.
         *                  3: Low risk.
         * @return {@code this}
         */
        public Builder riskLevel(com.aliyun.ros.cdk.core.IResolvable riskLevel) {
            this.riskLevel = riskLevel;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getCompliancePackTemplateId}
         * @param compliancePackTemplateId Property compliancePackTemplateId: Compliance package template ID.
         * @return {@code this}
         */
        public Builder compliancePackTemplateId(java.lang.String compliancePackTemplateId) {
            this.compliancePackTemplateId = compliancePackTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getCompliancePackTemplateId}
         * @param compliancePackTemplateId Property compliancePackTemplateId: Compliance package template ID.
         * @return {@code this}
         */
        public Builder compliancePackTemplateId(com.aliyun.ros.cdk.core.IResolvable compliancePackTemplateId) {
            this.compliancePackTemplateId = compliancePackTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getDefaultEnable}
         * @param defaultEnable Property defaultEnable: Whether the rule supports quick activation.
         *                      Value:
         *                      true: This rule will be enabled when the compliance package is quickly enabled.
         *                      false (default): disable
         * @return {@code this}
         */
        public Builder defaultEnable(java.lang.Boolean defaultEnable) {
            this.defaultEnable = defaultEnable;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getDefaultEnable}
         * @param defaultEnable Property defaultEnable: Whether the rule supports quick activation.
         *                      Value:
         *                      true: This rule will be enabled when the compliance package is quickly enabled.
         *                      false (default): disable
         * @return {@code this}
         */
        public Builder defaultEnable(com.aliyun.ros.cdk.core.IResolvable defaultEnable) {
            this.defaultEnable = defaultEnable;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getExcludeResourceIdsScope}
         * @param excludeResourceIdsScope Property excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource.
         * @return {@code this}
         */
        public Builder excludeResourceIdsScope(com.aliyun.ros.cdk.core.IResolvable excludeResourceIdsScope) {
            this.excludeResourceIdsScope = excludeResourceIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getExcludeResourceIdsScope}
         * @param excludeResourceIdsScope Property excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource.
         * @return {@code this}
         */
        public Builder excludeResourceIdsScope(java.util.List<? extends java.lang.Object> excludeResourceIdsScope) {
            this.excludeResourceIdsScope = excludeResourceIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getRegionIdsScope}
         * @param regionIdsScope Property regionIdsScope: The compliance package only takes effect for resources in the specified region ID.
         * @return {@code this}
         */
        public Builder regionIdsScope(com.aliyun.ros.cdk.core.IResolvable regionIdsScope) {
            this.regionIdsScope = regionIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getRegionIdsScope}
         * @param regionIdsScope Property regionIdsScope: The compliance package only takes effect for resources in the specified region ID.
         * @return {@code this}
         */
        public Builder regionIdsScope(java.util.List<? extends java.lang.Object> regionIdsScope) {
            this.regionIdsScope = regionIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getResourceGroupIdsScope}
         * @param resourceGroupIdsScope Property resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID.
         * @return {@code this}
         */
        public Builder resourceGroupIdsScope(com.aliyun.ros.cdk.core.IResolvable resourceGroupIdsScope) {
            this.resourceGroupIdsScope = resourceGroupIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getResourceGroupIdsScope}
         * @param resourceGroupIdsScope Property resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID.
         * @return {@code this}
         */
        public Builder resourceGroupIdsScope(java.util.List<? extends java.lang.Object> resourceGroupIdsScope) {
            this.resourceGroupIdsScope = resourceGroupIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getTagKeyScope}
         * @param tagKeyScope Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.
         * @return {@code this}
         */
        public Builder tagKeyScope(java.lang.String tagKeyScope) {
            this.tagKeyScope = tagKeyScope;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getTagKeyScope}
         * @param tagKeyScope Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.
         * @return {@code this}
         */
        public Builder tagKeyScope(com.aliyun.ros.cdk.core.IResolvable tagKeyScope) {
            this.tagKeyScope = tagKeyScope;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getTagValueScope}
         * @param tagValueScope Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.
         * @return {@code this}
         */
        public Builder tagValueScope(java.lang.String tagValueScope) {
            this.tagValueScope = tagValueScope;
            return this;
        }

        /**
         * Sets the value of {@link AggregateCompliancePackProps#getTagValueScope}
         * @param tagValueScope Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.
         * @return {@code this}
         */
        public Builder tagValueScope(com.aliyun.ros.cdk.core.IResolvable tagValueScope) {
            this.tagValueScope = tagValueScope;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AggregateCompliancePackProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AggregateCompliancePackProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AggregateCompliancePackProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AggregateCompliancePackProps {
        private final java.lang.Object aggregatorId;
        private final java.lang.Object compliancePackName;
        private final java.lang.Object configRules;
        private final java.lang.Object description;
        private final java.lang.Object riskLevel;
        private final java.lang.Object compliancePackTemplateId;
        private final java.lang.Object defaultEnable;
        private final java.lang.Object excludeResourceIdsScope;
        private final java.lang.Object regionIdsScope;
        private final java.lang.Object resourceGroupIdsScope;
        private final java.lang.Object tagKeyScope;
        private final java.lang.Object tagValueScope;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aggregatorId = software.amazon.jsii.Kernel.get(this, "aggregatorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.compliancePackName = software.amazon.jsii.Kernel.get(this, "compliancePackName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configRules = software.amazon.jsii.Kernel.get(this, "configRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.riskLevel = software.amazon.jsii.Kernel.get(this, "riskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.compliancePackTemplateId = software.amazon.jsii.Kernel.get(this, "compliancePackTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultEnable = software.amazon.jsii.Kernel.get(this, "defaultEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.excludeResourceIdsScope = software.amazon.jsii.Kernel.get(this, "excludeResourceIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.regionIdsScope = software.amazon.jsii.Kernel.get(this, "regionIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupIdsScope = software.amazon.jsii.Kernel.get(this, "resourceGroupIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagKeyScope = software.amazon.jsii.Kernel.get(this, "tagKeyScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagValueScope = software.amazon.jsii.Kernel.get(this, "tagValueScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aggregatorId = java.util.Objects.requireNonNull(builder.aggregatorId, "aggregatorId is required");
            this.compliancePackName = java.util.Objects.requireNonNull(builder.compliancePackName, "compliancePackName is required");
            this.configRules = java.util.Objects.requireNonNull(builder.configRules, "configRules is required");
            this.description = java.util.Objects.requireNonNull(builder.description, "description is required");
            this.riskLevel = java.util.Objects.requireNonNull(builder.riskLevel, "riskLevel is required");
            this.compliancePackTemplateId = builder.compliancePackTemplateId;
            this.defaultEnable = builder.defaultEnable;
            this.excludeResourceIdsScope = builder.excludeResourceIdsScope;
            this.regionIdsScope = builder.regionIdsScope;
            this.resourceGroupIdsScope = builder.resourceGroupIdsScope;
            this.tagKeyScope = builder.tagKeyScope;
            this.tagValueScope = builder.tagValueScope;
        }

        @Override
        public final java.lang.Object getAggregatorId() {
            return this.aggregatorId;
        }

        @Override
        public final java.lang.Object getCompliancePackName() {
            return this.compliancePackName;
        }

        @Override
        public final java.lang.Object getConfigRules() {
            return this.configRules;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getRiskLevel() {
            return this.riskLevel;
        }

        @Override
        public final java.lang.Object getCompliancePackTemplateId() {
            return this.compliancePackTemplateId;
        }

        @Override
        public final java.lang.Object getDefaultEnable() {
            return this.defaultEnable;
        }

        @Override
        public final java.lang.Object getExcludeResourceIdsScope() {
            return this.excludeResourceIdsScope;
        }

        @Override
        public final java.lang.Object getRegionIdsScope() {
            return this.regionIdsScope;
        }

        @Override
        public final java.lang.Object getResourceGroupIdsScope() {
            return this.resourceGroupIdsScope;
        }

        @Override
        public final java.lang.Object getTagKeyScope() {
            return this.tagKeyScope;
        }

        @Override
        public final java.lang.Object getTagValueScope() {
            return this.tagValueScope;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aggregatorId", om.valueToTree(this.getAggregatorId()));
            data.set("compliancePackName", om.valueToTree(this.getCompliancePackName()));
            data.set("configRules", om.valueToTree(this.getConfigRules()));
            data.set("description", om.valueToTree(this.getDescription()));
            data.set("riskLevel", om.valueToTree(this.getRiskLevel()));
            if (this.getCompliancePackTemplateId() != null) {
                data.set("compliancePackTemplateId", om.valueToTree(this.getCompliancePackTemplateId()));
            }
            if (this.getDefaultEnable() != null) {
                data.set("defaultEnable", om.valueToTree(this.getDefaultEnable()));
            }
            if (this.getExcludeResourceIdsScope() != null) {
                data.set("excludeResourceIdsScope", om.valueToTree(this.getExcludeResourceIdsScope()));
            }
            if (this.getRegionIdsScope() != null) {
                data.set("regionIdsScope", om.valueToTree(this.getRegionIdsScope()));
            }
            if (this.getResourceGroupIdsScope() != null) {
                data.set("resourceGroupIdsScope", om.valueToTree(this.getResourceGroupIdsScope()));
            }
            if (this.getTagKeyScope() != null) {
                data.set("tagKeyScope", om.valueToTree(this.getTagKeyScope()));
            }
            if (this.getTagValueScope() != null) {
                data.set("tagValueScope", om.valueToTree(this.getTagValueScope()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.AggregateCompliancePackProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AggregateCompliancePackProps.Jsii$Proxy that = (AggregateCompliancePackProps.Jsii$Proxy) o;

            if (!aggregatorId.equals(that.aggregatorId)) return false;
            if (!compliancePackName.equals(that.compliancePackName)) return false;
            if (!configRules.equals(that.configRules)) return false;
            if (!description.equals(that.description)) return false;
            if (!riskLevel.equals(that.riskLevel)) return false;
            if (this.compliancePackTemplateId != null ? !this.compliancePackTemplateId.equals(that.compliancePackTemplateId) : that.compliancePackTemplateId != null) return false;
            if (this.defaultEnable != null ? !this.defaultEnable.equals(that.defaultEnable) : that.defaultEnable != null) return false;
            if (this.excludeResourceIdsScope != null ? !this.excludeResourceIdsScope.equals(that.excludeResourceIdsScope) : that.excludeResourceIdsScope != null) return false;
            if (this.regionIdsScope != null ? !this.regionIdsScope.equals(that.regionIdsScope) : that.regionIdsScope != null) return false;
            if (this.resourceGroupIdsScope != null ? !this.resourceGroupIdsScope.equals(that.resourceGroupIdsScope) : that.resourceGroupIdsScope != null) return false;
            if (this.tagKeyScope != null ? !this.tagKeyScope.equals(that.tagKeyScope) : that.tagKeyScope != null) return false;
            return this.tagValueScope != null ? this.tagValueScope.equals(that.tagValueScope) : that.tagValueScope == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aggregatorId.hashCode();
            result = 31 * result + (this.compliancePackName.hashCode());
            result = 31 * result + (this.configRules.hashCode());
            result = 31 * result + (this.description.hashCode());
            result = 31 * result + (this.riskLevel.hashCode());
            result = 31 * result + (this.compliancePackTemplateId != null ? this.compliancePackTemplateId.hashCode() : 0);
            result = 31 * result + (this.defaultEnable != null ? this.defaultEnable.hashCode() : 0);
            result = 31 * result + (this.excludeResourceIdsScope != null ? this.excludeResourceIdsScope.hashCode() : 0);
            result = 31 * result + (this.regionIdsScope != null ? this.regionIdsScope.hashCode() : 0);
            result = 31 * result + (this.resourceGroupIdsScope != null ? this.resourceGroupIdsScope.hashCode() : 0);
            result = 31 * result + (this.tagKeyScope != null ? this.tagKeyScope.hashCode() : 0);
            result = 31 * result + (this.tagValueScope != null ? this.tagValueScope.hashCode() : 0);
            return result;
        }
    }
}
