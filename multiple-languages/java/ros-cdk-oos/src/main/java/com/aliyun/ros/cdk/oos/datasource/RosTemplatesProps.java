package com.aliyun.ros.cdk.oos.datasource;

/**
 * Properties for defining a <code>RosTemplates</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.997Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.datasource.RosTemplatesProps")
@software.amazon.jsii.Jsii.Proxy(RosTemplatesProps.Jsii$Proxy.class)
public interface RosTemplatesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreatedBy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreatedDateAfter() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreatedDateBefore() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHasTrigger() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsExample() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsFavorite() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShareType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSortField() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSortOrder() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateFormat() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTemplatesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTemplatesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTemplatesProps> {
        java.lang.Object category;
        java.lang.Object createdBy;
        java.lang.Object createdDateAfter;
        java.lang.Object createdDateBefore;
        java.lang.Object hasTrigger;
        java.lang.Object isExample;
        java.lang.Object isFavorite;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object shareType;
        java.lang.Object sortField;
        java.lang.Object sortOrder;
        java.util.Map<java.lang.String, java.lang.Object> tags;
        java.lang.Object templateFormat;
        java.lang.Object templateName;
        java.lang.Object templateType;

        /**
         * Sets the value of {@link RosTemplatesProps#getCategory}
         * @param category the value to be set.
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getCategory}
         * @param category the value to be set.
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getCreatedBy}
         * @param createdBy the value to be set.
         * @return {@code this}
         */
        public Builder createdBy(java.lang.String createdBy) {
            this.createdBy = createdBy;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getCreatedBy}
         * @param createdBy the value to be set.
         * @return {@code this}
         */
        public Builder createdBy(com.aliyun.ros.cdk.core.IResolvable createdBy) {
            this.createdBy = createdBy;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getCreatedDateAfter}
         * @param createdDateAfter the value to be set.
         * @return {@code this}
         */
        public Builder createdDateAfter(java.lang.String createdDateAfter) {
            this.createdDateAfter = createdDateAfter;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getCreatedDateAfter}
         * @param createdDateAfter the value to be set.
         * @return {@code this}
         */
        public Builder createdDateAfter(com.aliyun.ros.cdk.core.IResolvable createdDateAfter) {
            this.createdDateAfter = createdDateAfter;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getCreatedDateBefore}
         * @param createdDateBefore the value to be set.
         * @return {@code this}
         */
        public Builder createdDateBefore(java.lang.String createdDateBefore) {
            this.createdDateBefore = createdDateBefore;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getCreatedDateBefore}
         * @param createdDateBefore the value to be set.
         * @return {@code this}
         */
        public Builder createdDateBefore(com.aliyun.ros.cdk.core.IResolvable createdDateBefore) {
            this.createdDateBefore = createdDateBefore;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getHasTrigger}
         * @param hasTrigger the value to be set.
         * @return {@code this}
         */
        public Builder hasTrigger(java.lang.Boolean hasTrigger) {
            this.hasTrigger = hasTrigger;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getHasTrigger}
         * @param hasTrigger the value to be set.
         * @return {@code this}
         */
        public Builder hasTrigger(com.aliyun.ros.cdk.core.IResolvable hasTrigger) {
            this.hasTrigger = hasTrigger;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getIsExample}
         * @param isExample the value to be set.
         * @return {@code this}
         */
        public Builder isExample(java.lang.Boolean isExample) {
            this.isExample = isExample;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getIsExample}
         * @param isExample the value to be set.
         * @return {@code this}
         */
        public Builder isExample(com.aliyun.ros.cdk.core.IResolvable isExample) {
            this.isExample = isExample;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getIsFavorite}
         * @param isFavorite the value to be set.
         * @return {@code this}
         */
        public Builder isFavorite(java.lang.Boolean isFavorite) {
            this.isFavorite = isFavorite;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getIsFavorite}
         * @param isFavorite the value to be set.
         * @return {@code this}
         */
        public Builder isFavorite(com.aliyun.ros.cdk.core.IResolvable isFavorite) {
            this.isFavorite = isFavorite;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getShareType}
         * @param shareType the value to be set.
         * @return {@code this}
         */
        public Builder shareType(java.lang.String shareType) {
            this.shareType = shareType;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getShareType}
         * @param shareType the value to be set.
         * @return {@code this}
         */
        public Builder shareType(com.aliyun.ros.cdk.core.IResolvable shareType) {
            this.shareType = shareType;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getSortField}
         * @param sortField the value to be set.
         * @return {@code this}
         */
        public Builder sortField(java.lang.String sortField) {
            this.sortField = sortField;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getSortField}
         * @param sortField the value to be set.
         * @return {@code this}
         */
        public Builder sortField(com.aliyun.ros.cdk.core.IResolvable sortField) {
            this.sortField = sortField;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getSortOrder}
         * @param sortOrder the value to be set.
         * @return {@code this}
         */
        public Builder sortOrder(java.lang.String sortOrder) {
            this.sortOrder = sortOrder;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getSortOrder}
         * @param sortOrder the value to be set.
         * @return {@code this}
         */
        public Builder sortOrder(com.aliyun.ros.cdk.core.IResolvable sortOrder) {
            this.sortOrder = sortOrder;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getTemplateFormat}
         * @param templateFormat the value to be set.
         * @return {@code this}
         */
        public Builder templateFormat(java.lang.String templateFormat) {
            this.templateFormat = templateFormat;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getTemplateFormat}
         * @param templateFormat the value to be set.
         * @return {@code this}
         */
        public Builder templateFormat(com.aliyun.ros.cdk.core.IResolvable templateFormat) {
            this.templateFormat = templateFormat;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getTemplateName}
         * @param templateName the value to be set.
         * @return {@code this}
         */
        public Builder templateName(java.lang.String templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getTemplateName}
         * @param templateName the value to be set.
         * @return {@code this}
         */
        public Builder templateName(com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getTemplateType}
         * @param templateType the value to be set.
         * @return {@code this}
         */
        public Builder templateType(java.lang.String templateType) {
            this.templateType = templateType;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplatesProps#getTemplateType}
         * @param templateType the value to be set.
         * @return {@code this}
         */
        public Builder templateType(com.aliyun.ros.cdk.core.IResolvable templateType) {
            this.templateType = templateType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTemplatesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTemplatesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTemplatesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTemplatesProps {
        private final java.lang.Object category;
        private final java.lang.Object createdBy;
        private final java.lang.Object createdDateAfter;
        private final java.lang.Object createdDateBefore;
        private final java.lang.Object hasTrigger;
        private final java.lang.Object isExample;
        private final java.lang.Object isFavorite;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object shareType;
        private final java.lang.Object sortField;
        private final java.lang.Object sortOrder;
        private final java.util.Map<java.lang.String, java.lang.Object> tags;
        private final java.lang.Object templateFormat;
        private final java.lang.Object templateName;
        private final java.lang.Object templateType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.createdBy = software.amazon.jsii.Kernel.get(this, "createdBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.createdDateAfter = software.amazon.jsii.Kernel.get(this, "createdDateAfter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.createdDateBefore = software.amazon.jsii.Kernel.get(this, "createdDateBefore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hasTrigger = software.amazon.jsii.Kernel.get(this, "hasTrigger", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isExample = software.amazon.jsii.Kernel.get(this, "isExample", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isFavorite = software.amazon.jsii.Kernel.get(this, "isFavorite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.shareType = software.amazon.jsii.Kernel.get(this, "shareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sortField = software.amazon.jsii.Kernel.get(this, "sortField", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sortOrder = software.amazon.jsii.Kernel.get(this, "sortOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.templateFormat = software.amazon.jsii.Kernel.get(this, "templateFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateName = software.amazon.jsii.Kernel.get(this, "templateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateType = software.amazon.jsii.Kernel.get(this, "templateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.category = builder.category;
            this.createdBy = builder.createdBy;
            this.createdDateAfter = builder.createdDateAfter;
            this.createdDateBefore = builder.createdDateBefore;
            this.hasTrigger = builder.hasTrigger;
            this.isExample = builder.isExample;
            this.isFavorite = builder.isFavorite;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.shareType = builder.shareType;
            this.sortField = builder.sortField;
            this.sortOrder = builder.sortOrder;
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)builder.tags;
            this.templateFormat = builder.templateFormat;
            this.templateName = builder.templateName;
            this.templateType = builder.templateType;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
        }

        @Override
        public final java.lang.Object getCreatedBy() {
            return this.createdBy;
        }

        @Override
        public final java.lang.Object getCreatedDateAfter() {
            return this.createdDateAfter;
        }

        @Override
        public final java.lang.Object getCreatedDateBefore() {
            return this.createdDateBefore;
        }

        @Override
        public final java.lang.Object getHasTrigger() {
            return this.hasTrigger;
        }

        @Override
        public final java.lang.Object getIsExample() {
            return this.isExample;
        }

        @Override
        public final java.lang.Object getIsFavorite() {
            return this.isFavorite;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getShareType() {
            return this.shareType;
        }

        @Override
        public final java.lang.Object getSortField() {
            return this.sortField;
        }

        @Override
        public final java.lang.Object getSortOrder() {
            return this.sortOrder;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.Object> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTemplateFormat() {
            return this.templateFormat;
        }

        @Override
        public final java.lang.Object getTemplateName() {
            return this.templateName;
        }

        @Override
        public final java.lang.Object getTemplateType() {
            return this.templateType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCategory() != null) {
                data.set("category", om.valueToTree(this.getCategory()));
            }
            if (this.getCreatedBy() != null) {
                data.set("createdBy", om.valueToTree(this.getCreatedBy()));
            }
            if (this.getCreatedDateAfter() != null) {
                data.set("createdDateAfter", om.valueToTree(this.getCreatedDateAfter()));
            }
            if (this.getCreatedDateBefore() != null) {
                data.set("createdDateBefore", om.valueToTree(this.getCreatedDateBefore()));
            }
            if (this.getHasTrigger() != null) {
                data.set("hasTrigger", om.valueToTree(this.getHasTrigger()));
            }
            if (this.getIsExample() != null) {
                data.set("isExample", om.valueToTree(this.getIsExample()));
            }
            if (this.getIsFavorite() != null) {
                data.set("isFavorite", om.valueToTree(this.getIsFavorite()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getShareType() != null) {
                data.set("shareType", om.valueToTree(this.getShareType()));
            }
            if (this.getSortField() != null) {
                data.set("sortField", om.valueToTree(this.getSortField()));
            }
            if (this.getSortOrder() != null) {
                data.set("sortOrder", om.valueToTree(this.getSortOrder()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTemplateFormat() != null) {
                data.set("templateFormat", om.valueToTree(this.getTemplateFormat()));
            }
            if (this.getTemplateName() != null) {
                data.set("templateName", om.valueToTree(this.getTemplateName()));
            }
            if (this.getTemplateType() != null) {
                data.set("templateType", om.valueToTree(this.getTemplateType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.datasource.RosTemplatesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTemplatesProps.Jsii$Proxy that = (RosTemplatesProps.Jsii$Proxy) o;

            if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
            if (this.createdBy != null ? !this.createdBy.equals(that.createdBy) : that.createdBy != null) return false;
            if (this.createdDateAfter != null ? !this.createdDateAfter.equals(that.createdDateAfter) : that.createdDateAfter != null) return false;
            if (this.createdDateBefore != null ? !this.createdDateBefore.equals(that.createdDateBefore) : that.createdDateBefore != null) return false;
            if (this.hasTrigger != null ? !this.hasTrigger.equals(that.hasTrigger) : that.hasTrigger != null) return false;
            if (this.isExample != null ? !this.isExample.equals(that.isExample) : that.isExample != null) return false;
            if (this.isFavorite != null ? !this.isFavorite.equals(that.isFavorite) : that.isFavorite != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.shareType != null ? !this.shareType.equals(that.shareType) : that.shareType != null) return false;
            if (this.sortField != null ? !this.sortField.equals(that.sortField) : that.sortField != null) return false;
            if (this.sortOrder != null ? !this.sortOrder.equals(that.sortOrder) : that.sortOrder != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.templateFormat != null ? !this.templateFormat.equals(that.templateFormat) : that.templateFormat != null) return false;
            if (this.templateName != null ? !this.templateName.equals(that.templateName) : that.templateName != null) return false;
            return this.templateType != null ? this.templateType.equals(that.templateType) : that.templateType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.category != null ? this.category.hashCode() : 0;
            result = 31 * result + (this.createdBy != null ? this.createdBy.hashCode() : 0);
            result = 31 * result + (this.createdDateAfter != null ? this.createdDateAfter.hashCode() : 0);
            result = 31 * result + (this.createdDateBefore != null ? this.createdDateBefore.hashCode() : 0);
            result = 31 * result + (this.hasTrigger != null ? this.hasTrigger.hashCode() : 0);
            result = 31 * result + (this.isExample != null ? this.isExample.hashCode() : 0);
            result = 31 * result + (this.isFavorite != null ? this.isFavorite.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.shareType != null ? this.shareType.hashCode() : 0);
            result = 31 * result + (this.sortField != null ? this.sortField.hashCode() : 0);
            result = 31 * result + (this.sortOrder != null ? this.sortOrder.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.templateFormat != null ? this.templateFormat.hashCode() : 0);
            result = 31 * result + (this.templateName != null ? this.templateName.hashCode() : 0);
            result = 31 * result + (this.templateType != null ? this.templateType.hashCode() : 0);
            return result;
        }
    }
}
