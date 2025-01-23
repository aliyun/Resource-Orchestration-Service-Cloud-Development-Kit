package com.aliyun.ros.cdk.ice;

/**
 * Properties for defining a <code>RosMediaInfo</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.879Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ice.$Module.class, fqn = "@alicloud/ros-cdk-ice.RosMediaInfoProps")
@software.amazon.jsii.Jsii.Proxy(RosMediaInfoProps.Jsii$Proxy.class)
public interface RosMediaInfoProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInputUrl();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBusinessType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCoverUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMediaTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMediaType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOverwrite() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReferenceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegisterConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSmartTagTemplateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTitle() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkflowId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosMediaInfoProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMediaInfoProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMediaInfoProps> {
        java.lang.Object inputUrl;
        java.lang.Object businessType;
        java.lang.Object cateId;
        java.lang.Object coverUrl;
        java.lang.Object description;
        java.lang.Object mediaTags;
        java.lang.Object mediaType;
        java.lang.Object overwrite;
        java.lang.Object referenceId;
        java.lang.Object registerConfig;
        java.lang.Object smartTagTemplateId;
        java.lang.Object title;
        java.lang.Object userData;
        java.lang.Object workflowId;

        /**
         * Sets the value of {@link RosMediaInfoProps#getInputUrl}
         * @param inputUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder inputUrl(java.lang.String inputUrl) {
            this.inputUrl = inputUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getInputUrl}
         * @param inputUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder inputUrl(com.aliyun.ros.cdk.core.IResolvable inputUrl) {
            this.inputUrl = inputUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getBusinessType}
         * @param businessType the value to be set.
         * @return {@code this}
         */
        public Builder businessType(java.lang.String businessType) {
            this.businessType = businessType;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getBusinessType}
         * @param businessType the value to be set.
         * @return {@code this}
         */
        public Builder businessType(com.aliyun.ros.cdk.core.IResolvable businessType) {
            this.businessType = businessType;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getCateId}
         * @param cateId the value to be set.
         * @return {@code this}
         */
        public Builder cateId(java.lang.Number cateId) {
            this.cateId = cateId;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getCateId}
         * @param cateId the value to be set.
         * @return {@code this}
         */
        public Builder cateId(com.aliyun.ros.cdk.core.IResolvable cateId) {
            this.cateId = cateId;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getCoverUrl}
         * @param coverUrl the value to be set.
         * @return {@code this}
         */
        public Builder coverUrl(java.lang.String coverUrl) {
            this.coverUrl = coverUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getCoverUrl}
         * @param coverUrl the value to be set.
         * @return {@code this}
         */
        public Builder coverUrl(com.aliyun.ros.cdk.core.IResolvable coverUrl) {
            this.coverUrl = coverUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getMediaTags}
         * @param mediaTags the value to be set.
         * @return {@code this}
         */
        public Builder mediaTags(com.aliyun.ros.cdk.core.IResolvable mediaTags) {
            this.mediaTags = mediaTags;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getMediaTags}
         * @param mediaTags the value to be set.
         * @return {@code this}
         */
        public Builder mediaTags(java.util.List<? extends java.lang.Object> mediaTags) {
            this.mediaTags = mediaTags;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getMediaType}
         * @param mediaType the value to be set.
         * @return {@code this}
         */
        public Builder mediaType(java.lang.String mediaType) {
            this.mediaType = mediaType;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getMediaType}
         * @param mediaType the value to be set.
         * @return {@code this}
         */
        public Builder mediaType(com.aliyun.ros.cdk.core.IResolvable mediaType) {
            this.mediaType = mediaType;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getOverwrite}
         * @param overwrite the value to be set.
         * @return {@code this}
         */
        public Builder overwrite(java.lang.Boolean overwrite) {
            this.overwrite = overwrite;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getOverwrite}
         * @param overwrite the value to be set.
         * @return {@code this}
         */
        public Builder overwrite(com.aliyun.ros.cdk.core.IResolvable overwrite) {
            this.overwrite = overwrite;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getReferenceId}
         * @param referenceId the value to be set.
         * @return {@code this}
         */
        public Builder referenceId(java.lang.String referenceId) {
            this.referenceId = referenceId;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getReferenceId}
         * @param referenceId the value to be set.
         * @return {@code this}
         */
        public Builder referenceId(com.aliyun.ros.cdk.core.IResolvable referenceId) {
            this.referenceId = referenceId;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getRegisterConfig}
         * @param registerConfig the value to be set.
         * @return {@code this}
         */
        public Builder registerConfig(java.lang.String registerConfig) {
            this.registerConfig = registerConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getRegisterConfig}
         * @param registerConfig the value to be set.
         * @return {@code this}
         */
        public Builder registerConfig(com.aliyun.ros.cdk.core.IResolvable registerConfig) {
            this.registerConfig = registerConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getSmartTagTemplateId}
         * @param smartTagTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder smartTagTemplateId(java.lang.String smartTagTemplateId) {
            this.smartTagTemplateId = smartTagTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getSmartTagTemplateId}
         * @param smartTagTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder smartTagTemplateId(com.aliyun.ros.cdk.core.IResolvable smartTagTemplateId) {
            this.smartTagTemplateId = smartTagTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getTitle}
         * @param title the value to be set.
         * @return {@code this}
         */
        public Builder title(java.lang.String title) {
            this.title = title;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getTitle}
         * @param title the value to be set.
         * @return {@code this}
         */
        public Builder title(com.aliyun.ros.cdk.core.IResolvable title) {
            this.title = title;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getUserData}
         * @param userData the value to be set.
         * @return {@code this}
         */
        public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getUserData}
         * @param userData the value to be set.
         * @return {@code this}
         */
        public Builder userData(java.util.Map<java.lang.String, ? extends java.lang.Object> userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getWorkflowId}
         * @param workflowId the value to be set.
         * @return {@code this}
         */
        public Builder workflowId(java.lang.String workflowId) {
            this.workflowId = workflowId;
            return this;
        }

        /**
         * Sets the value of {@link RosMediaInfoProps#getWorkflowId}
         * @param workflowId the value to be set.
         * @return {@code this}
         */
        public Builder workflowId(com.aliyun.ros.cdk.core.IResolvable workflowId) {
            this.workflowId = workflowId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMediaInfoProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMediaInfoProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMediaInfoProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMediaInfoProps {
        private final java.lang.Object inputUrl;
        private final java.lang.Object businessType;
        private final java.lang.Object cateId;
        private final java.lang.Object coverUrl;
        private final java.lang.Object description;
        private final java.lang.Object mediaTags;
        private final java.lang.Object mediaType;
        private final java.lang.Object overwrite;
        private final java.lang.Object referenceId;
        private final java.lang.Object registerConfig;
        private final java.lang.Object smartTagTemplateId;
        private final java.lang.Object title;
        private final java.lang.Object userData;
        private final java.lang.Object workflowId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.inputUrl = software.amazon.jsii.Kernel.get(this, "inputUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.businessType = software.amazon.jsii.Kernel.get(this, "businessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cateId = software.amazon.jsii.Kernel.get(this, "cateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coverUrl = software.amazon.jsii.Kernel.get(this, "coverUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mediaTags = software.amazon.jsii.Kernel.get(this, "mediaTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mediaType = software.amazon.jsii.Kernel.get(this, "mediaType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.overwrite = software.amazon.jsii.Kernel.get(this, "overwrite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.referenceId = software.amazon.jsii.Kernel.get(this, "referenceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.registerConfig = software.amazon.jsii.Kernel.get(this, "registerConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.smartTagTemplateId = software.amazon.jsii.Kernel.get(this, "smartTagTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.title = software.amazon.jsii.Kernel.get(this, "title", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workflowId = software.amazon.jsii.Kernel.get(this, "workflowId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.inputUrl = java.util.Objects.requireNonNull(builder.inputUrl, "inputUrl is required");
            this.businessType = builder.businessType;
            this.cateId = builder.cateId;
            this.coverUrl = builder.coverUrl;
            this.description = builder.description;
            this.mediaTags = builder.mediaTags;
            this.mediaType = builder.mediaType;
            this.overwrite = builder.overwrite;
            this.referenceId = builder.referenceId;
            this.registerConfig = builder.registerConfig;
            this.smartTagTemplateId = builder.smartTagTemplateId;
            this.title = builder.title;
            this.userData = builder.userData;
            this.workflowId = builder.workflowId;
        }

        @Override
        public final java.lang.Object getInputUrl() {
            return this.inputUrl;
        }

        @Override
        public final java.lang.Object getBusinessType() {
            return this.businessType;
        }

        @Override
        public final java.lang.Object getCateId() {
            return this.cateId;
        }

        @Override
        public final java.lang.Object getCoverUrl() {
            return this.coverUrl;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getMediaTags() {
            return this.mediaTags;
        }

        @Override
        public final java.lang.Object getMediaType() {
            return this.mediaType;
        }

        @Override
        public final java.lang.Object getOverwrite() {
            return this.overwrite;
        }

        @Override
        public final java.lang.Object getReferenceId() {
            return this.referenceId;
        }

        @Override
        public final java.lang.Object getRegisterConfig() {
            return this.registerConfig;
        }

        @Override
        public final java.lang.Object getSmartTagTemplateId() {
            return this.smartTagTemplateId;
        }

        @Override
        public final java.lang.Object getTitle() {
            return this.title;
        }

        @Override
        public final java.lang.Object getUserData() {
            return this.userData;
        }

        @Override
        public final java.lang.Object getWorkflowId() {
            return this.workflowId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("inputUrl", om.valueToTree(this.getInputUrl()));
            if (this.getBusinessType() != null) {
                data.set("businessType", om.valueToTree(this.getBusinessType()));
            }
            if (this.getCateId() != null) {
                data.set("cateId", om.valueToTree(this.getCateId()));
            }
            if (this.getCoverUrl() != null) {
                data.set("coverUrl", om.valueToTree(this.getCoverUrl()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getMediaTags() != null) {
                data.set("mediaTags", om.valueToTree(this.getMediaTags()));
            }
            if (this.getMediaType() != null) {
                data.set("mediaType", om.valueToTree(this.getMediaType()));
            }
            if (this.getOverwrite() != null) {
                data.set("overwrite", om.valueToTree(this.getOverwrite()));
            }
            if (this.getReferenceId() != null) {
                data.set("referenceId", om.valueToTree(this.getReferenceId()));
            }
            if (this.getRegisterConfig() != null) {
                data.set("registerConfig", om.valueToTree(this.getRegisterConfig()));
            }
            if (this.getSmartTagTemplateId() != null) {
                data.set("smartTagTemplateId", om.valueToTree(this.getSmartTagTemplateId()));
            }
            if (this.getTitle() != null) {
                data.set("title", om.valueToTree(this.getTitle()));
            }
            if (this.getUserData() != null) {
                data.set("userData", om.valueToTree(this.getUserData()));
            }
            if (this.getWorkflowId() != null) {
                data.set("workflowId", om.valueToTree(this.getWorkflowId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ice.RosMediaInfoProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMediaInfoProps.Jsii$Proxy that = (RosMediaInfoProps.Jsii$Proxy) o;

            if (!inputUrl.equals(that.inputUrl)) return false;
            if (this.businessType != null ? !this.businessType.equals(that.businessType) : that.businessType != null) return false;
            if (this.cateId != null ? !this.cateId.equals(that.cateId) : that.cateId != null) return false;
            if (this.coverUrl != null ? !this.coverUrl.equals(that.coverUrl) : that.coverUrl != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.mediaTags != null ? !this.mediaTags.equals(that.mediaTags) : that.mediaTags != null) return false;
            if (this.mediaType != null ? !this.mediaType.equals(that.mediaType) : that.mediaType != null) return false;
            if (this.overwrite != null ? !this.overwrite.equals(that.overwrite) : that.overwrite != null) return false;
            if (this.referenceId != null ? !this.referenceId.equals(that.referenceId) : that.referenceId != null) return false;
            if (this.registerConfig != null ? !this.registerConfig.equals(that.registerConfig) : that.registerConfig != null) return false;
            if (this.smartTagTemplateId != null ? !this.smartTagTemplateId.equals(that.smartTagTemplateId) : that.smartTagTemplateId != null) return false;
            if (this.title != null ? !this.title.equals(that.title) : that.title != null) return false;
            if (this.userData != null ? !this.userData.equals(that.userData) : that.userData != null) return false;
            return this.workflowId != null ? this.workflowId.equals(that.workflowId) : that.workflowId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.inputUrl.hashCode();
            result = 31 * result + (this.businessType != null ? this.businessType.hashCode() : 0);
            result = 31 * result + (this.cateId != null ? this.cateId.hashCode() : 0);
            result = 31 * result + (this.coverUrl != null ? this.coverUrl.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.mediaTags != null ? this.mediaTags.hashCode() : 0);
            result = 31 * result + (this.mediaType != null ? this.mediaType.hashCode() : 0);
            result = 31 * result + (this.overwrite != null ? this.overwrite.hashCode() : 0);
            result = 31 * result + (this.referenceId != null ? this.referenceId.hashCode() : 0);
            result = 31 * result + (this.registerConfig != null ? this.registerConfig.hashCode() : 0);
            result = 31 * result + (this.smartTagTemplateId != null ? this.smartTagTemplateId.hashCode() : 0);
            result = 31 * result + (this.title != null ? this.title.hashCode() : 0);
            result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
            result = 31 * result + (this.workflowId != null ? this.workflowId.hashCode() : 0);
            return result;
        }
    }
}
