package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosLaunchTemplateVersion</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplateversion
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:36:38.171Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosLaunchTemplateVersionProps")
@software.amazon.jsii.Jsii.Proxy(RosLaunchTemplateVersionProps.Jsii$Proxy.class)
public interface RosLaunchTemplateVersionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateData() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVersionDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosLaunchTemplateVersionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosLaunchTemplateVersionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosLaunchTemplateVersionProps> {
        java.lang.Object launchTemplateData;
        java.lang.Object launchTemplateId;
        java.lang.Object launchTemplateName;
        java.lang.Object resourceGroupId;
        java.lang.Object versionDescription;

        /**
         * Sets the value of {@link RosLaunchTemplateVersionProps#getLaunchTemplateData}
         * @param launchTemplateData the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateData(com.aliyun.ros.cdk.core.IResolvable launchTemplateData) {
            this.launchTemplateData = launchTemplateData;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateVersionProps#getLaunchTemplateData}
         * @param launchTemplateData the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateData(com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion.LaunchTemplateDataProperty launchTemplateData) {
            this.launchTemplateData = launchTemplateData;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateVersionProps#getLaunchTemplateId}
         * @param launchTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateId(java.lang.String launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateVersionProps#getLaunchTemplateId}
         * @param launchTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateId(com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateVersionProps#getLaunchTemplateName}
         * @param launchTemplateName the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateName(java.lang.String launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateVersionProps#getLaunchTemplateName}
         * @param launchTemplateName the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateName(com.aliyun.ros.cdk.core.IResolvable launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateVersionProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateVersionProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateVersionProps#getVersionDescription}
         * @param versionDescription the value to be set.
         * @return {@code this}
         */
        public Builder versionDescription(java.lang.String versionDescription) {
            this.versionDescription = versionDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateVersionProps#getVersionDescription}
         * @param versionDescription the value to be set.
         * @return {@code this}
         */
        public Builder versionDescription(com.aliyun.ros.cdk.core.IResolvable versionDescription) {
            this.versionDescription = versionDescription;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosLaunchTemplateVersionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosLaunchTemplateVersionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosLaunchTemplateVersionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosLaunchTemplateVersionProps {
        private final java.lang.Object launchTemplateData;
        private final java.lang.Object launchTemplateId;
        private final java.lang.Object launchTemplateName;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object versionDescription;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.launchTemplateData = software.amazon.jsii.Kernel.get(this, "launchTemplateData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateId = software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateName = software.amazon.jsii.Kernel.get(this, "launchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionDescription = software.amazon.jsii.Kernel.get(this, "versionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.launchTemplateData = builder.launchTemplateData;
            this.launchTemplateId = builder.launchTemplateId;
            this.launchTemplateName = builder.launchTemplateName;
            this.resourceGroupId = builder.resourceGroupId;
            this.versionDescription = builder.versionDescription;
        }

        @Override
        public final java.lang.Object getLaunchTemplateData() {
            return this.launchTemplateData;
        }

        @Override
        public final java.lang.Object getLaunchTemplateId() {
            return this.launchTemplateId;
        }

        @Override
        public final java.lang.Object getLaunchTemplateName() {
            return this.launchTemplateName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getVersionDescription() {
            return this.versionDescription;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getLaunchTemplateData() != null) {
                data.set("launchTemplateData", om.valueToTree(this.getLaunchTemplateData()));
            }
            if (this.getLaunchTemplateId() != null) {
                data.set("launchTemplateId", om.valueToTree(this.getLaunchTemplateId()));
            }
            if (this.getLaunchTemplateName() != null) {
                data.set("launchTemplateName", om.valueToTree(this.getLaunchTemplateName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getVersionDescription() != null) {
                data.set("versionDescription", om.valueToTree(this.getVersionDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosLaunchTemplateVersionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosLaunchTemplateVersionProps.Jsii$Proxy that = (RosLaunchTemplateVersionProps.Jsii$Proxy) o;

            if (this.launchTemplateData != null ? !this.launchTemplateData.equals(that.launchTemplateData) : that.launchTemplateData != null) return false;
            if (this.launchTemplateId != null ? !this.launchTemplateId.equals(that.launchTemplateId) : that.launchTemplateId != null) return false;
            if (this.launchTemplateName != null ? !this.launchTemplateName.equals(that.launchTemplateName) : that.launchTemplateName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.versionDescription != null ? this.versionDescription.equals(that.versionDescription) : that.versionDescription == null;
        }

        @Override
        public final int hashCode() {
            int result = this.launchTemplateData != null ? this.launchTemplateData.hashCode() : 0;
            result = 31 * result + (this.launchTemplateId != null ? this.launchTemplateId.hashCode() : 0);
            result = 31 * result + (this.launchTemplateName != null ? this.launchTemplateName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.versionDescription != null ? this.versionDescription.hashCode() : 0);
            return result;
        }
    }
}
