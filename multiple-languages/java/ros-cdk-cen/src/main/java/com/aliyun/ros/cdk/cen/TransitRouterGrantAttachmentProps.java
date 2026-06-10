package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>TransitRouterGrantAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutergrantattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:45:17.397Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterGrantAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(TransitRouterGrantAttachmentProps.Jsii$Proxy.class)
public interface TransitRouterGrantAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     * Property cenOwnerId: The Alibaba Cloud account ID (main account ID) of the CEN instance owner.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenOwnerId();

    /**
     * Property instanceId: The ID of the network instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property instanceType: The type of the network instance.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>VPC: Virtual Private Cloud instance.</li>
     * <li>ExpressConnect: Virtual Border Router (VBR) instance.</li>
     * <li>VPN: IPsec connection.</li>
     * <li>ECR: ECR instance.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

    /**
     * Property orderType: The billing method for the network instance.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>PayByCenOwner: The fees incurred by the network instance are paid by the owner of the CEN instance.</li>
     * <li>PayByResourceOwner: The fees incurred by the network instance are paid by the owner of the network instance.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrderType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TransitRouterGrantAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TransitRouterGrantAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TransitRouterGrantAttachmentProps> {
        java.lang.Object cenId;
        java.lang.Object cenOwnerId;
        java.lang.Object instanceId;
        java.lang.Object instanceType;
        java.lang.Object orderType;

        /**
         * Sets the value of {@link TransitRouterGrantAttachmentProps#getCenId}
         * @param cenId Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterGrantAttachmentProps#getCenId}
         * @param cenId Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterGrantAttachmentProps#getCenOwnerId}
         * @param cenOwnerId Property cenOwnerId: The Alibaba Cloud account ID (main account ID) of the CEN instance owner. This parameter is required.
         * @return {@code this}
         */
        public Builder cenOwnerId(java.lang.Number cenOwnerId) {
            this.cenOwnerId = cenOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterGrantAttachmentProps#getCenOwnerId}
         * @param cenOwnerId Property cenOwnerId: The Alibaba Cloud account ID (main account ID) of the CEN instance owner. This parameter is required.
         * @return {@code this}
         */
        public Builder cenOwnerId(com.aliyun.ros.cdk.core.IResolvable cenOwnerId) {
            this.cenOwnerId = cenOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterGrantAttachmentProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the network instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterGrantAttachmentProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the network instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterGrantAttachmentProps#getInstanceType}
         * @param instanceType Property instanceType: The type of the network instance. This parameter is required.
         *                     Valid values:
         *                     <p>
         *                     <ul>
         *                     <li>VPC: Virtual Private Cloud instance.</li>
         *                     <li>ExpressConnect: Virtual Border Router (VBR) instance.</li>
         *                     <li>VPN: IPsec connection.</li>
         *                     <li>ECR: ECR instance.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterGrantAttachmentProps#getInstanceType}
         * @param instanceType Property instanceType: The type of the network instance. This parameter is required.
         *                     Valid values:
         *                     <p>
         *                     <ul>
         *                     <li>VPC: Virtual Private Cloud instance.</li>
         *                     <li>ExpressConnect: Virtual Border Router (VBR) instance.</li>
         *                     <li>VPN: IPsec connection.</li>
         *                     <li>ECR: ECR instance.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterGrantAttachmentProps#getOrderType}
         * @param orderType Property orderType: The billing method for the network instance.
         *                  Valid values:
         *                  <p>
         *                  <ul>
         *                  <li>PayByCenOwner: The fees incurred by the network instance are paid by the owner of the CEN instance.</li>
         *                  <li>PayByResourceOwner: The fees incurred by the network instance are paid by the owner of the network instance.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder orderType(java.lang.String orderType) {
            this.orderType = orderType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterGrantAttachmentProps#getOrderType}
         * @param orderType Property orderType: The billing method for the network instance.
         *                  Valid values:
         *                  <p>
         *                  <ul>
         *                  <li>PayByCenOwner: The fees incurred by the network instance are paid by the owner of the CEN instance.</li>
         *                  <li>PayByResourceOwner: The fees incurred by the network instance are paid by the owner of the network instance.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder orderType(com.aliyun.ros.cdk.core.IResolvable orderType) {
            this.orderType = orderType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TransitRouterGrantAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TransitRouterGrantAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TransitRouterGrantAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TransitRouterGrantAttachmentProps {
        private final java.lang.Object cenId;
        private final java.lang.Object cenOwnerId;
        private final java.lang.Object instanceId;
        private final java.lang.Object instanceType;
        private final java.lang.Object orderType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenOwnerId = software.amazon.jsii.Kernel.get(this, "cenOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.orderType = software.amazon.jsii.Kernel.get(this, "orderType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.cenOwnerId = java.util.Objects.requireNonNull(builder.cenOwnerId, "cenOwnerId is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
            this.orderType = builder.orderType;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getCenOwnerId() {
            return this.cenOwnerId;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getOrderType() {
            return this.orderType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            data.set("cenOwnerId", om.valueToTree(this.getCenOwnerId()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            if (this.getOrderType() != null) {
                data.set("orderType", om.valueToTree(this.getOrderType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.TransitRouterGrantAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TransitRouterGrantAttachmentProps.Jsii$Proxy that = (TransitRouterGrantAttachmentProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (!cenOwnerId.equals(that.cenOwnerId)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!instanceType.equals(that.instanceType)) return false;
            return this.orderType != null ? this.orderType.equals(that.orderType) : that.orderType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.cenOwnerId.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.instanceType.hashCode());
            result = 31 * result + (this.orderType != null ? this.orderType.hashCode() : 0);
            return result;
        }
    }
}
