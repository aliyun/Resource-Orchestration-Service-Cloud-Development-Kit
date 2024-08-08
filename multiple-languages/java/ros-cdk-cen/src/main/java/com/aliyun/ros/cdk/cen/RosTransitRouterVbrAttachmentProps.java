package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>RosTransitRouterVbrAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervbrattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:08.012Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosTransitRouterVbrAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(RosTransitRouterVbrAttachmentProps.Jsii$Proxy.class)
public interface RosTransitRouterVbrAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVbrId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPublishRouteEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCenId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVbrOwnerId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTransitRouterVbrAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTransitRouterVbrAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTransitRouterVbrAttachmentProps> {
        java.lang.Object vbrId;
        java.lang.Object autoPublishRouteEnabled;
        java.lang.Object cenId;
        java.lang.Object transitRouterAttachmentDescription;
        java.lang.Object transitRouterAttachmentName;
        java.lang.Object transitRouterId;
        java.lang.Object vbrOwnerId;

        /**
         * Sets the value of {@link RosTransitRouterVbrAttachmentProps#getVbrId}
         * @param vbrId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vbrId(java.lang.String vbrId) {
            this.vbrId = vbrId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterVbrAttachmentProps#getVbrId}
         * @param vbrId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vbrId(com.aliyun.ros.cdk.core.IResolvable vbrId) {
            this.vbrId = vbrId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterVbrAttachmentProps#getAutoPublishRouteEnabled}
         * @param autoPublishRouteEnabled the value to be set.
         * @return {@code this}
         */
        public Builder autoPublishRouteEnabled(java.lang.Boolean autoPublishRouteEnabled) {
            this.autoPublishRouteEnabled = autoPublishRouteEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterVbrAttachmentProps#getAutoPublishRouteEnabled}
         * @param autoPublishRouteEnabled the value to be set.
         * @return {@code this}
         */
        public Builder autoPublishRouteEnabled(com.aliyun.ros.cdk.core.IResolvable autoPublishRouteEnabled) {
            this.autoPublishRouteEnabled = autoPublishRouteEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterVbrAttachmentProps#getCenId}
         * @param cenId the value to be set.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterVbrAttachmentProps#getCenId}
         * @param cenId the value to be set.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterVbrAttachmentProps#getTransitRouterAttachmentDescription}
         * @param transitRouterAttachmentDescription the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentDescription(java.lang.String transitRouterAttachmentDescription) {
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterVbrAttachmentProps#getTransitRouterAttachmentDescription}
         * @param transitRouterAttachmentDescription the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentDescription(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentDescription) {
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterVbrAttachmentProps#getTransitRouterAttachmentName}
         * @param transitRouterAttachmentName the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentName(java.lang.String transitRouterAttachmentName) {
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterVbrAttachmentProps#getTransitRouterAttachmentName}
         * @param transitRouterAttachmentName the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentName(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentName) {
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterVbrAttachmentProps#getTransitRouterId}
         * @param transitRouterId the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterId(java.lang.String transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterVbrAttachmentProps#getTransitRouterId}
         * @param transitRouterId the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterId(com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterVbrAttachmentProps#getVbrOwnerId}
         * @param vbrOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder vbrOwnerId(java.lang.Number vbrOwnerId) {
            this.vbrOwnerId = vbrOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterVbrAttachmentProps#getVbrOwnerId}
         * @param vbrOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder vbrOwnerId(com.aliyun.ros.cdk.core.IResolvable vbrOwnerId) {
            this.vbrOwnerId = vbrOwnerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTransitRouterVbrAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTransitRouterVbrAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTransitRouterVbrAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTransitRouterVbrAttachmentProps {
        private final java.lang.Object vbrId;
        private final java.lang.Object autoPublishRouteEnabled;
        private final java.lang.Object cenId;
        private final java.lang.Object transitRouterAttachmentDescription;
        private final java.lang.Object transitRouterAttachmentName;
        private final java.lang.Object transitRouterId;
        private final java.lang.Object vbrOwnerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vbrId = software.amazon.jsii.Kernel.get(this, "vbrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPublishRouteEnabled = software.amazon.jsii.Kernel.get(this, "autoPublishRouteEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterAttachmentDescription = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterAttachmentName = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterId = software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vbrOwnerId = software.amazon.jsii.Kernel.get(this, "vbrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vbrId = java.util.Objects.requireNonNull(builder.vbrId, "vbrId is required");
            this.autoPublishRouteEnabled = builder.autoPublishRouteEnabled;
            this.cenId = builder.cenId;
            this.transitRouterAttachmentDescription = builder.transitRouterAttachmentDescription;
            this.transitRouterAttachmentName = builder.transitRouterAttachmentName;
            this.transitRouterId = builder.transitRouterId;
            this.vbrOwnerId = builder.vbrOwnerId;
        }

        @Override
        public final java.lang.Object getVbrId() {
            return this.vbrId;
        }

        @Override
        public final java.lang.Object getAutoPublishRouteEnabled() {
            return this.autoPublishRouteEnabled;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getTransitRouterAttachmentDescription() {
            return this.transitRouterAttachmentDescription;
        }

        @Override
        public final java.lang.Object getTransitRouterAttachmentName() {
            return this.transitRouterAttachmentName;
        }

        @Override
        public final java.lang.Object getTransitRouterId() {
            return this.transitRouterId;
        }

        @Override
        public final java.lang.Object getVbrOwnerId() {
            return this.vbrOwnerId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vbrId", om.valueToTree(this.getVbrId()));
            if (this.getAutoPublishRouteEnabled() != null) {
                data.set("autoPublishRouteEnabled", om.valueToTree(this.getAutoPublishRouteEnabled()));
            }
            if (this.getCenId() != null) {
                data.set("cenId", om.valueToTree(this.getCenId()));
            }
            if (this.getTransitRouterAttachmentDescription() != null) {
                data.set("transitRouterAttachmentDescription", om.valueToTree(this.getTransitRouterAttachmentDescription()));
            }
            if (this.getTransitRouterAttachmentName() != null) {
                data.set("transitRouterAttachmentName", om.valueToTree(this.getTransitRouterAttachmentName()));
            }
            if (this.getTransitRouterId() != null) {
                data.set("transitRouterId", om.valueToTree(this.getTransitRouterId()));
            }
            if (this.getVbrOwnerId() != null) {
                data.set("vbrOwnerId", om.valueToTree(this.getVbrOwnerId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosTransitRouterVbrAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTransitRouterVbrAttachmentProps.Jsii$Proxy that = (RosTransitRouterVbrAttachmentProps.Jsii$Proxy) o;

            if (!vbrId.equals(that.vbrId)) return false;
            if (this.autoPublishRouteEnabled != null ? !this.autoPublishRouteEnabled.equals(that.autoPublishRouteEnabled) : that.autoPublishRouteEnabled != null) return false;
            if (this.cenId != null ? !this.cenId.equals(that.cenId) : that.cenId != null) return false;
            if (this.transitRouterAttachmentDescription != null ? !this.transitRouterAttachmentDescription.equals(that.transitRouterAttachmentDescription) : that.transitRouterAttachmentDescription != null) return false;
            if (this.transitRouterAttachmentName != null ? !this.transitRouterAttachmentName.equals(that.transitRouterAttachmentName) : that.transitRouterAttachmentName != null) return false;
            if (this.transitRouterId != null ? !this.transitRouterId.equals(that.transitRouterId) : that.transitRouterId != null) return false;
            return this.vbrOwnerId != null ? this.vbrOwnerId.equals(that.vbrOwnerId) : that.vbrOwnerId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vbrId.hashCode();
            result = 31 * result + (this.autoPublishRouteEnabled != null ? this.autoPublishRouteEnabled.hashCode() : 0);
            result = 31 * result + (this.cenId != null ? this.cenId.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentDescription != null ? this.transitRouterAttachmentDescription.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentName != null ? this.transitRouterAttachmentName.hashCode() : 0);
            result = 31 * result + (this.transitRouterId != null ? this.transitRouterId.hashCode() : 0);
            result = 31 * result + (this.vbrOwnerId != null ? this.vbrOwnerId.hashCode() : 0);
            return result;
        }
    }
}
