package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>CenInstanceAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstanceattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:07.700Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenInstanceAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(CenInstanceAttachmentProps.Jsii$Proxy.class)
public interface CenInstanceAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cenId: The ID of the CEN instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     * Property childInstanceId: The ID of the network to attach.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChildInstanceId();

    /**
     * Property childInstanceRegionId: The ID of the region where the network is located.
     * <p>
     * The ID of the region where the network is located.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChildInstanceRegionId();

    /**
     * Property childInstanceType: The type of the network to attach.
     * <p>
     * Support VPC, VBR or CCN.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChildInstanceType();

    /**
     * Property childInstanceOwnerId: The account ID to which the network belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChildInstanceOwnerId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CenInstanceAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CenInstanceAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CenInstanceAttachmentProps> {
        java.lang.Object cenId;
        java.lang.Object childInstanceId;
        java.lang.Object childInstanceRegionId;
        java.lang.Object childInstanceType;
        java.lang.Object childInstanceOwnerId;

        /**
         * Sets the value of {@link CenInstanceAttachmentProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link CenInstanceAttachmentProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link CenInstanceAttachmentProps#getChildInstanceId}
         * @param childInstanceId Property childInstanceId: The ID of the network to attach. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceId(java.lang.String childInstanceId) {
            this.childInstanceId = childInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link CenInstanceAttachmentProps#getChildInstanceId}
         * @param childInstanceId Property childInstanceId: The ID of the network to attach. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceId(com.aliyun.ros.cdk.core.IResolvable childInstanceId) {
            this.childInstanceId = childInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link CenInstanceAttachmentProps#getChildInstanceRegionId}
         * @param childInstanceRegionId Property childInstanceRegionId: The ID of the region where the network is located. This parameter is required.
         *                              The ID of the region where the network is located.
         * @return {@code this}
         */
        public Builder childInstanceRegionId(java.lang.String childInstanceRegionId) {
            this.childInstanceRegionId = childInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenInstanceAttachmentProps#getChildInstanceRegionId}
         * @param childInstanceRegionId Property childInstanceRegionId: The ID of the region where the network is located. This parameter is required.
         *                              The ID of the region where the network is located.
         * @return {@code this}
         */
        public Builder childInstanceRegionId(com.aliyun.ros.cdk.core.IResolvable childInstanceRegionId) {
            this.childInstanceRegionId = childInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenInstanceAttachmentProps#getChildInstanceType}
         * @param childInstanceType Property childInstanceType: The type of the network to attach. This parameter is required.
         *                          Support VPC, VBR or CCN.
         * @return {@code this}
         */
        public Builder childInstanceType(java.lang.String childInstanceType) {
            this.childInstanceType = childInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link CenInstanceAttachmentProps#getChildInstanceType}
         * @param childInstanceType Property childInstanceType: The type of the network to attach. This parameter is required.
         *                          Support VPC, VBR or CCN.
         * @return {@code this}
         */
        public Builder childInstanceType(com.aliyun.ros.cdk.core.IResolvable childInstanceType) {
            this.childInstanceType = childInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link CenInstanceAttachmentProps#getChildInstanceOwnerId}
         * @param childInstanceOwnerId Property childInstanceOwnerId: The account ID to which the network belongs.
         * @return {@code this}
         */
        public Builder childInstanceOwnerId(java.lang.Number childInstanceOwnerId) {
            this.childInstanceOwnerId = childInstanceOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link CenInstanceAttachmentProps#getChildInstanceOwnerId}
         * @param childInstanceOwnerId Property childInstanceOwnerId: The account ID to which the network belongs.
         * @return {@code this}
         */
        public Builder childInstanceOwnerId(com.aliyun.ros.cdk.core.IResolvable childInstanceOwnerId) {
            this.childInstanceOwnerId = childInstanceOwnerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CenInstanceAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CenInstanceAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CenInstanceAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CenInstanceAttachmentProps {
        private final java.lang.Object cenId;
        private final java.lang.Object childInstanceId;
        private final java.lang.Object childInstanceRegionId;
        private final java.lang.Object childInstanceType;
        private final java.lang.Object childInstanceOwnerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.childInstanceId = software.amazon.jsii.Kernel.get(this, "childInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.childInstanceRegionId = software.amazon.jsii.Kernel.get(this, "childInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.childInstanceType = software.amazon.jsii.Kernel.get(this, "childInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.childInstanceOwnerId = software.amazon.jsii.Kernel.get(this, "childInstanceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.childInstanceId = java.util.Objects.requireNonNull(builder.childInstanceId, "childInstanceId is required");
            this.childInstanceRegionId = java.util.Objects.requireNonNull(builder.childInstanceRegionId, "childInstanceRegionId is required");
            this.childInstanceType = java.util.Objects.requireNonNull(builder.childInstanceType, "childInstanceType is required");
            this.childInstanceOwnerId = builder.childInstanceOwnerId;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getChildInstanceId() {
            return this.childInstanceId;
        }

        @Override
        public final java.lang.Object getChildInstanceRegionId() {
            return this.childInstanceRegionId;
        }

        @Override
        public final java.lang.Object getChildInstanceType() {
            return this.childInstanceType;
        }

        @Override
        public final java.lang.Object getChildInstanceOwnerId() {
            return this.childInstanceOwnerId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            data.set("childInstanceId", om.valueToTree(this.getChildInstanceId()));
            data.set("childInstanceRegionId", om.valueToTree(this.getChildInstanceRegionId()));
            data.set("childInstanceType", om.valueToTree(this.getChildInstanceType()));
            if (this.getChildInstanceOwnerId() != null) {
                data.set("childInstanceOwnerId", om.valueToTree(this.getChildInstanceOwnerId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.CenInstanceAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CenInstanceAttachmentProps.Jsii$Proxy that = (CenInstanceAttachmentProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (!childInstanceId.equals(that.childInstanceId)) return false;
            if (!childInstanceRegionId.equals(that.childInstanceRegionId)) return false;
            if (!childInstanceType.equals(that.childInstanceType)) return false;
            return this.childInstanceOwnerId != null ? this.childInstanceOwnerId.equals(that.childInstanceOwnerId) : that.childInstanceOwnerId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.childInstanceId.hashCode());
            result = 31 * result + (this.childInstanceRegionId.hashCode());
            result = 31 * result + (this.childInstanceType.hashCode());
            result = 31 * result + (this.childInstanceOwnerId != null ? this.childInstanceOwnerId.hashCode() : 0);
            return result;
        }
    }
}
