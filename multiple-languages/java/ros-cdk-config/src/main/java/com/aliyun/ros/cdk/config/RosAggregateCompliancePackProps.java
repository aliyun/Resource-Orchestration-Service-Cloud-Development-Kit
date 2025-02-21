package com.aliyun.ros.cdk.config;

/**
 * Properties for defining a <code>RosAggregateCompliancePack</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregatecompliancepack
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:13.423Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosAggregateCompliancePackProps")
@software.amazon.jsii.Jsii.Proxy(RosAggregateCompliancePackProps.Jsii$Proxy.class)
public interface RosAggregateCompliancePackProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAggregatorId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCompliancePackName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRiskLevel();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompliancePackTemplateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfigRules() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExcludeRegionIdsScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExcludeResourceGroupIdsScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExcludeResourceIdsScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegionIdsScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupIdsScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceIdsScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagKeyScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagValueScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateContent() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAggregateCompliancePackProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAggregateCompliancePackProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAggregateCompliancePackProps> {
        java.lang.Object aggregatorId;
        java.lang.Object compliancePackName;
        java.lang.Object description;
        java.lang.Object riskLevel;
        java.lang.Object compliancePackTemplateId;
        java.lang.Object configRules;
        java.lang.Object defaultEnable;
        java.lang.Object excludeRegionIdsScope;
        java.lang.Object excludeResourceGroupIdsScope;
        java.lang.Object excludeResourceIdsScope;
        java.lang.Object regionIdsScope;
        java.lang.Object resourceGroupIdsScope;
        java.lang.Object resourceIdsScope;
        java.lang.Object tagKeyScope;
        java.lang.Object tagValueScope;
        java.lang.Object templateContent;

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getAggregatorId}
         * @param aggregatorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aggregatorId(java.lang.String aggregatorId) {
            this.aggregatorId = aggregatorId;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getAggregatorId}
         * @param aggregatorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aggregatorId(com.aliyun.ros.cdk.core.IResolvable aggregatorId) {
            this.aggregatorId = aggregatorId;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getCompliancePackName}
         * @param compliancePackName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder compliancePackName(java.lang.String compliancePackName) {
            this.compliancePackName = compliancePackName;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getCompliancePackName}
         * @param compliancePackName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder compliancePackName(com.aliyun.ros.cdk.core.IResolvable compliancePackName) {
            this.compliancePackName = compliancePackName;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getRiskLevel}
         * @param riskLevel the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder riskLevel(java.lang.Number riskLevel) {
            this.riskLevel = riskLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getRiskLevel}
         * @param riskLevel the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder riskLevel(com.aliyun.ros.cdk.core.IResolvable riskLevel) {
            this.riskLevel = riskLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getCompliancePackTemplateId}
         * @param compliancePackTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder compliancePackTemplateId(java.lang.String compliancePackTemplateId) {
            this.compliancePackTemplateId = compliancePackTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getCompliancePackTemplateId}
         * @param compliancePackTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder compliancePackTemplateId(com.aliyun.ros.cdk.core.IResolvable compliancePackTemplateId) {
            this.compliancePackTemplateId = compliancePackTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getConfigRules}
         * @param configRules the value to be set.
         * @return {@code this}
         */
        public Builder configRules(com.aliyun.ros.cdk.core.IResolvable configRules) {
            this.configRules = configRules;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getConfigRules}
         * @param configRules the value to be set.
         * @return {@code this}
         */
        public Builder configRules(java.util.List<? extends java.lang.Object> configRules) {
            this.configRules = configRules;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getDefaultEnable}
         * @param defaultEnable the value to be set.
         * @return {@code this}
         */
        public Builder defaultEnable(java.lang.Boolean defaultEnable) {
            this.defaultEnable = defaultEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getDefaultEnable}
         * @param defaultEnable the value to be set.
         * @return {@code this}
         */
        public Builder defaultEnable(com.aliyun.ros.cdk.core.IResolvable defaultEnable) {
            this.defaultEnable = defaultEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getExcludeRegionIdsScope}
         * @param excludeRegionIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder excludeRegionIdsScope(java.lang.String excludeRegionIdsScope) {
            this.excludeRegionIdsScope = excludeRegionIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getExcludeRegionIdsScope}
         * @param excludeRegionIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder excludeRegionIdsScope(com.aliyun.ros.cdk.core.IResolvable excludeRegionIdsScope) {
            this.excludeRegionIdsScope = excludeRegionIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getExcludeResourceGroupIdsScope}
         * @param excludeResourceGroupIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder excludeResourceGroupIdsScope(java.lang.String excludeResourceGroupIdsScope) {
            this.excludeResourceGroupIdsScope = excludeResourceGroupIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getExcludeResourceGroupIdsScope}
         * @param excludeResourceGroupIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder excludeResourceGroupIdsScope(com.aliyun.ros.cdk.core.IResolvable excludeResourceGroupIdsScope) {
            this.excludeResourceGroupIdsScope = excludeResourceGroupIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getExcludeResourceIdsScope}
         * @param excludeResourceIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder excludeResourceIdsScope(com.aliyun.ros.cdk.core.IResolvable excludeResourceIdsScope) {
            this.excludeResourceIdsScope = excludeResourceIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getExcludeResourceIdsScope}
         * @param excludeResourceIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder excludeResourceIdsScope(java.util.List<? extends java.lang.Object> excludeResourceIdsScope) {
            this.excludeResourceIdsScope = excludeResourceIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getRegionIdsScope}
         * @param regionIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder regionIdsScope(com.aliyun.ros.cdk.core.IResolvable regionIdsScope) {
            this.regionIdsScope = regionIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getRegionIdsScope}
         * @param regionIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder regionIdsScope(java.util.List<? extends java.lang.Object> regionIdsScope) {
            this.regionIdsScope = regionIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getResourceGroupIdsScope}
         * @param resourceGroupIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupIdsScope(com.aliyun.ros.cdk.core.IResolvable resourceGroupIdsScope) {
            this.resourceGroupIdsScope = resourceGroupIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getResourceGroupIdsScope}
         * @param resourceGroupIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupIdsScope(java.util.List<? extends java.lang.Object> resourceGroupIdsScope) {
            this.resourceGroupIdsScope = resourceGroupIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getResourceIdsScope}
         * @param resourceIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder resourceIdsScope(java.lang.String resourceIdsScope) {
            this.resourceIdsScope = resourceIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getResourceIdsScope}
         * @param resourceIdsScope the value to be set.
         * @return {@code this}
         */
        public Builder resourceIdsScope(com.aliyun.ros.cdk.core.IResolvable resourceIdsScope) {
            this.resourceIdsScope = resourceIdsScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getTagKeyScope}
         * @param tagKeyScope the value to be set.
         * @return {@code this}
         */
        public Builder tagKeyScope(java.lang.String tagKeyScope) {
            this.tagKeyScope = tagKeyScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getTagKeyScope}
         * @param tagKeyScope the value to be set.
         * @return {@code this}
         */
        public Builder tagKeyScope(com.aliyun.ros.cdk.core.IResolvable tagKeyScope) {
            this.tagKeyScope = tagKeyScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getTagValueScope}
         * @param tagValueScope the value to be set.
         * @return {@code this}
         */
        public Builder tagValueScope(java.lang.String tagValueScope) {
            this.tagValueScope = tagValueScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getTagValueScope}
         * @param tagValueScope the value to be set.
         * @return {@code this}
         */
        public Builder tagValueScope(com.aliyun.ros.cdk.core.IResolvable tagValueScope) {
            this.tagValueScope = tagValueScope;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getTemplateContent}
         * @param templateContent the value to be set.
         * @return {@code this}
         */
        public Builder templateContent(java.lang.String templateContent) {
            this.templateContent = templateContent;
            return this;
        }

        /**
         * Sets the value of {@link RosAggregateCompliancePackProps#getTemplateContent}
         * @param templateContent the value to be set.
         * @return {@code this}
         */
        public Builder templateContent(com.aliyun.ros.cdk.core.IResolvable templateContent) {
            this.templateContent = templateContent;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAggregateCompliancePackProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAggregateCompliancePackProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAggregateCompliancePackProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAggregateCompliancePackProps {
        private final java.lang.Object aggregatorId;
        private final java.lang.Object compliancePackName;
        private final java.lang.Object description;
        private final java.lang.Object riskLevel;
        private final java.lang.Object compliancePackTemplateId;
        private final java.lang.Object configRules;
        private final java.lang.Object defaultEnable;
        private final java.lang.Object excludeRegionIdsScope;
        private final java.lang.Object excludeResourceGroupIdsScope;
        private final java.lang.Object excludeResourceIdsScope;
        private final java.lang.Object regionIdsScope;
        private final java.lang.Object resourceGroupIdsScope;
        private final java.lang.Object resourceIdsScope;
        private final java.lang.Object tagKeyScope;
        private final java.lang.Object tagValueScope;
        private final java.lang.Object templateContent;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aggregatorId = software.amazon.jsii.Kernel.get(this, "aggregatorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.compliancePackName = software.amazon.jsii.Kernel.get(this, "compliancePackName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.riskLevel = software.amazon.jsii.Kernel.get(this, "riskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.compliancePackTemplateId = software.amazon.jsii.Kernel.get(this, "compliancePackTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configRules = software.amazon.jsii.Kernel.get(this, "configRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultEnable = software.amazon.jsii.Kernel.get(this, "defaultEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.excludeRegionIdsScope = software.amazon.jsii.Kernel.get(this, "excludeRegionIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.excludeResourceGroupIdsScope = software.amazon.jsii.Kernel.get(this, "excludeResourceGroupIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.excludeResourceIdsScope = software.amazon.jsii.Kernel.get(this, "excludeResourceIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.regionIdsScope = software.amazon.jsii.Kernel.get(this, "regionIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupIdsScope = software.amazon.jsii.Kernel.get(this, "resourceGroupIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceIdsScope = software.amazon.jsii.Kernel.get(this, "resourceIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagKeyScope = software.amazon.jsii.Kernel.get(this, "tagKeyScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagValueScope = software.amazon.jsii.Kernel.get(this, "tagValueScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateContent = software.amazon.jsii.Kernel.get(this, "templateContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aggregatorId = java.util.Objects.requireNonNull(builder.aggregatorId, "aggregatorId is required");
            this.compliancePackName = java.util.Objects.requireNonNull(builder.compliancePackName, "compliancePackName is required");
            this.description = java.util.Objects.requireNonNull(builder.description, "description is required");
            this.riskLevel = java.util.Objects.requireNonNull(builder.riskLevel, "riskLevel is required");
            this.compliancePackTemplateId = builder.compliancePackTemplateId;
            this.configRules = builder.configRules;
            this.defaultEnable = builder.defaultEnable;
            this.excludeRegionIdsScope = builder.excludeRegionIdsScope;
            this.excludeResourceGroupIdsScope = builder.excludeResourceGroupIdsScope;
            this.excludeResourceIdsScope = builder.excludeResourceIdsScope;
            this.regionIdsScope = builder.regionIdsScope;
            this.resourceGroupIdsScope = builder.resourceGroupIdsScope;
            this.resourceIdsScope = builder.resourceIdsScope;
            this.tagKeyScope = builder.tagKeyScope;
            this.tagValueScope = builder.tagValueScope;
            this.templateContent = builder.templateContent;
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
        public final java.lang.Object getConfigRules() {
            return this.configRules;
        }

        @Override
        public final java.lang.Object getDefaultEnable() {
            return this.defaultEnable;
        }

        @Override
        public final java.lang.Object getExcludeRegionIdsScope() {
            return this.excludeRegionIdsScope;
        }

        @Override
        public final java.lang.Object getExcludeResourceGroupIdsScope() {
            return this.excludeResourceGroupIdsScope;
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
        public final java.lang.Object getResourceIdsScope() {
            return this.resourceIdsScope;
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
        public final java.lang.Object getTemplateContent() {
            return this.templateContent;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aggregatorId", om.valueToTree(this.getAggregatorId()));
            data.set("compliancePackName", om.valueToTree(this.getCompliancePackName()));
            data.set("description", om.valueToTree(this.getDescription()));
            data.set("riskLevel", om.valueToTree(this.getRiskLevel()));
            if (this.getCompliancePackTemplateId() != null) {
                data.set("compliancePackTemplateId", om.valueToTree(this.getCompliancePackTemplateId()));
            }
            if (this.getConfigRules() != null) {
                data.set("configRules", om.valueToTree(this.getConfigRules()));
            }
            if (this.getDefaultEnable() != null) {
                data.set("defaultEnable", om.valueToTree(this.getDefaultEnable()));
            }
            if (this.getExcludeRegionIdsScope() != null) {
                data.set("excludeRegionIdsScope", om.valueToTree(this.getExcludeRegionIdsScope()));
            }
            if (this.getExcludeResourceGroupIdsScope() != null) {
                data.set("excludeResourceGroupIdsScope", om.valueToTree(this.getExcludeResourceGroupIdsScope()));
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
            if (this.getResourceIdsScope() != null) {
                data.set("resourceIdsScope", om.valueToTree(this.getResourceIdsScope()));
            }
            if (this.getTagKeyScope() != null) {
                data.set("tagKeyScope", om.valueToTree(this.getTagKeyScope()));
            }
            if (this.getTagValueScope() != null) {
                data.set("tagValueScope", om.valueToTree(this.getTagValueScope()));
            }
            if (this.getTemplateContent() != null) {
                data.set("templateContent", om.valueToTree(this.getTemplateContent()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.RosAggregateCompliancePackProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAggregateCompliancePackProps.Jsii$Proxy that = (RosAggregateCompliancePackProps.Jsii$Proxy) o;

            if (!aggregatorId.equals(that.aggregatorId)) return false;
            if (!compliancePackName.equals(that.compliancePackName)) return false;
            if (!description.equals(that.description)) return false;
            if (!riskLevel.equals(that.riskLevel)) return false;
            if (this.compliancePackTemplateId != null ? !this.compliancePackTemplateId.equals(that.compliancePackTemplateId) : that.compliancePackTemplateId != null) return false;
            if (this.configRules != null ? !this.configRules.equals(that.configRules) : that.configRules != null) return false;
            if (this.defaultEnable != null ? !this.defaultEnable.equals(that.defaultEnable) : that.defaultEnable != null) return false;
            if (this.excludeRegionIdsScope != null ? !this.excludeRegionIdsScope.equals(that.excludeRegionIdsScope) : that.excludeRegionIdsScope != null) return false;
            if (this.excludeResourceGroupIdsScope != null ? !this.excludeResourceGroupIdsScope.equals(that.excludeResourceGroupIdsScope) : that.excludeResourceGroupIdsScope != null) return false;
            if (this.excludeResourceIdsScope != null ? !this.excludeResourceIdsScope.equals(that.excludeResourceIdsScope) : that.excludeResourceIdsScope != null) return false;
            if (this.regionIdsScope != null ? !this.regionIdsScope.equals(that.regionIdsScope) : that.regionIdsScope != null) return false;
            if (this.resourceGroupIdsScope != null ? !this.resourceGroupIdsScope.equals(that.resourceGroupIdsScope) : that.resourceGroupIdsScope != null) return false;
            if (this.resourceIdsScope != null ? !this.resourceIdsScope.equals(that.resourceIdsScope) : that.resourceIdsScope != null) return false;
            if (this.tagKeyScope != null ? !this.tagKeyScope.equals(that.tagKeyScope) : that.tagKeyScope != null) return false;
            if (this.tagValueScope != null ? !this.tagValueScope.equals(that.tagValueScope) : that.tagValueScope != null) return false;
            return this.templateContent != null ? this.templateContent.equals(that.templateContent) : that.templateContent == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aggregatorId.hashCode();
            result = 31 * result + (this.compliancePackName.hashCode());
            result = 31 * result + (this.description.hashCode());
            result = 31 * result + (this.riskLevel.hashCode());
            result = 31 * result + (this.compliancePackTemplateId != null ? this.compliancePackTemplateId.hashCode() : 0);
            result = 31 * result + (this.configRules != null ? this.configRules.hashCode() : 0);
            result = 31 * result + (this.defaultEnable != null ? this.defaultEnable.hashCode() : 0);
            result = 31 * result + (this.excludeRegionIdsScope != null ? this.excludeRegionIdsScope.hashCode() : 0);
            result = 31 * result + (this.excludeResourceGroupIdsScope != null ? this.excludeResourceGroupIdsScope.hashCode() : 0);
            result = 31 * result + (this.excludeResourceIdsScope != null ? this.excludeResourceIdsScope.hashCode() : 0);
            result = 31 * result + (this.regionIdsScope != null ? this.regionIdsScope.hashCode() : 0);
            result = 31 * result + (this.resourceGroupIdsScope != null ? this.resourceGroupIdsScope.hashCode() : 0);
            result = 31 * result + (this.resourceIdsScope != null ? this.resourceIdsScope.hashCode() : 0);
            result = 31 * result + (this.tagKeyScope != null ? this.tagKeyScope.hashCode() : 0);
            result = 31 * result + (this.tagValueScope != null ? this.tagValueScope.hashCode() : 0);
            result = 31 * result + (this.templateContent != null ? this.templateContent.hashCode() : 0);
            return result;
        }
    }
}
