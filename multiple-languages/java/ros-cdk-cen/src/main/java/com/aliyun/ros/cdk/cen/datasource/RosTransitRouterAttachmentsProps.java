package com.aliyun.ros.cdk.cen.datasource;

/**
 * Properties for defining a <code>RosTransitRouterAttachments</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterattachments
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:45:17.440Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.datasource.RosTransitRouterAttachmentsProps")
@software.amazon.jsii.Jsii.Proxy(RosTransitRouterAttachmentsProps.Jsii$Proxy.class)
public interface RosTransitRouterAttachmentsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCenId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceTypes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTransitRouterAttachmentsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTransitRouterAttachmentsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTransitRouterAttachmentsProps> {
        java.lang.Object cenId;
        java.lang.Object refreshOptions;
        java.lang.Object regionId;
        java.lang.Object resourceTypes;
        java.lang.Object transitRouterAttachmentId;
        java.lang.Object transitRouterId;

        /**
         * Sets the value of {@link RosTransitRouterAttachmentsProps#getCenId}
         * @param cenId the value to be set.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterAttachmentsProps#getCenId}
         * @param cenId the value to be set.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterAttachmentsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterAttachmentsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterAttachmentsProps#getRegionId}
         * @param regionId the value to be set.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterAttachmentsProps#getRegionId}
         * @param regionId the value to be set.
         * @return {@code this}
         */
        public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterAttachmentsProps#getResourceTypes}
         * @param resourceTypes the value to be set.
         * @return {@code this}
         */
        public Builder resourceTypes(com.aliyun.ros.cdk.core.IResolvable resourceTypes) {
            this.resourceTypes = resourceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterAttachmentsProps#getResourceTypes}
         * @param resourceTypes the value to be set.
         * @return {@code this}
         */
        public Builder resourceTypes(java.util.List<? extends java.lang.Object> resourceTypes) {
            this.resourceTypes = resourceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterAttachmentsProps#getTransitRouterAttachmentId}
         * @param transitRouterAttachmentId the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentId(java.lang.String transitRouterAttachmentId) {
            this.transitRouterAttachmentId = transitRouterAttachmentId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterAttachmentsProps#getTransitRouterAttachmentId}
         * @param transitRouterAttachmentId the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentId(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentId) {
            this.transitRouterAttachmentId = transitRouterAttachmentId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterAttachmentsProps#getTransitRouterId}
         * @param transitRouterId the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterId(java.lang.String transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RosTransitRouterAttachmentsProps#getTransitRouterId}
         * @param transitRouterId the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterId(com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTransitRouterAttachmentsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTransitRouterAttachmentsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTransitRouterAttachmentsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTransitRouterAttachmentsProps {
        private final java.lang.Object cenId;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object regionId;
        private final java.lang.Object resourceTypes;
        private final java.lang.Object transitRouterAttachmentId;
        private final java.lang.Object transitRouterId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceTypes = software.amazon.jsii.Kernel.get(this, "resourceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterAttachmentId = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterId = software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = builder.cenId;
            this.refreshOptions = builder.refreshOptions;
            this.regionId = builder.regionId;
            this.resourceTypes = builder.resourceTypes;
            this.transitRouterAttachmentId = builder.transitRouterAttachmentId;
            this.transitRouterId = builder.transitRouterId;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getRegionId() {
            return this.regionId;
        }

        @Override
        public final java.lang.Object getResourceTypes() {
            return this.resourceTypes;
        }

        @Override
        public final java.lang.Object getTransitRouterAttachmentId() {
            return this.transitRouterAttachmentId;
        }

        @Override
        public final java.lang.Object getTransitRouterId() {
            return this.transitRouterId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCenId() != null) {
                data.set("cenId", om.valueToTree(this.getCenId()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getRegionId() != null) {
                data.set("regionId", om.valueToTree(this.getRegionId()));
            }
            if (this.getResourceTypes() != null) {
                data.set("resourceTypes", om.valueToTree(this.getResourceTypes()));
            }
            if (this.getTransitRouterAttachmentId() != null) {
                data.set("transitRouterAttachmentId", om.valueToTree(this.getTransitRouterAttachmentId()));
            }
            if (this.getTransitRouterId() != null) {
                data.set("transitRouterId", om.valueToTree(this.getTransitRouterId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.datasource.RosTransitRouterAttachmentsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTransitRouterAttachmentsProps.Jsii$Proxy that = (RosTransitRouterAttachmentsProps.Jsii$Proxy) o;

            if (this.cenId != null ? !this.cenId.equals(that.cenId) : that.cenId != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.regionId != null ? !this.regionId.equals(that.regionId) : that.regionId != null) return false;
            if (this.resourceTypes != null ? !this.resourceTypes.equals(that.resourceTypes) : that.resourceTypes != null) return false;
            if (this.transitRouterAttachmentId != null ? !this.transitRouterAttachmentId.equals(that.transitRouterAttachmentId) : that.transitRouterAttachmentId != null) return false;
            return this.transitRouterId != null ? this.transitRouterId.equals(that.transitRouterId) : that.transitRouterId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cenId != null ? this.cenId.hashCode() : 0;
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.regionId != null ? this.regionId.hashCode() : 0);
            result = 31 * result + (this.resourceTypes != null ? this.resourceTypes.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentId != null ? this.transitRouterAttachmentId.hashCode() : 0);
            result = 31 * result + (this.transitRouterId != null ? this.transitRouterId.hashCode() : 0);
            return result;
        }
    }
}
