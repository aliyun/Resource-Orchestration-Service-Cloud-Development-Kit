package com.aliyun.ros.cdk.devops;

/**
 * Properties for defining a <code>PipelineRelations</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.473Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.devops.$Module.class, fqn = "@alicloud/ros-cdk-devops.PipelineRelationsProps")
@software.amazon.jsii.Jsii.Proxy(PipelineRelationsProps.Jsii$Proxy.class)
public interface PipelineRelationsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOrganizationId();

    /**
     * Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPipelineId();

    /**
     * Property relObjectIds: Ids of the associated resource.
     * <p>
     * For now, only variable group ids are supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRelObjectIds();

    /**
     * Property relObjectType: Associated resource type.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>VARIABLE_GROUP</li>
     * <li>OOS_APP_ID
     * For now, only VARIABLE GROUP is supported.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRelObjectType();

    /**
     * @return a {@link Builder} of {@link PipelineRelationsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PipelineRelationsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PipelineRelationsProps> {
        java.lang.Object organizationId;
        java.lang.Object pipelineId;
        java.lang.Object relObjectIds;
        java.lang.Object relObjectType;

        /**
         * Sets the value of {@link PipelineRelationsProps#getOrganizationId}
         * @param organizationId Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links. This parameter is required.
         * @return {@code this}
         */
        public Builder organizationId(java.lang.String organizationId) {
            this.organizationId = organizationId;
            return this;
        }

        /**
         * Sets the value of {@link PipelineRelationsProps#getOrganizationId}
         * @param organizationId Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links. This parameter is required.
         * @return {@code this}
         */
        public Builder organizationId(com.aliyun.ros.cdk.core.IResolvable organizationId) {
            this.organizationId = organizationId;
            return this;
        }

        /**
         * Sets the value of {@link PipelineRelationsProps#getPipelineId}
         * @param pipelineId Property pipelineId: The pipeline ID, which can be obtained from the pipeline link. This parameter is required.
         * @return {@code this}
         */
        public Builder pipelineId(java.lang.Number pipelineId) {
            this.pipelineId = pipelineId;
            return this;
        }

        /**
         * Sets the value of {@link PipelineRelationsProps#getPipelineId}
         * @param pipelineId Property pipelineId: The pipeline ID, which can be obtained from the pipeline link. This parameter is required.
         * @return {@code this}
         */
        public Builder pipelineId(com.aliyun.ros.cdk.core.IResolvable pipelineId) {
            this.pipelineId = pipelineId;
            return this;
        }

        /**
         * Sets the value of {@link PipelineRelationsProps#getRelObjectIds}
         * @param relObjectIds Property relObjectIds: Ids of the associated resource. This parameter is required.
         *                     For now, only variable group ids are supported.
         * @return {@code this}
         */
        public Builder relObjectIds(com.aliyun.ros.cdk.core.IResolvable relObjectIds) {
            this.relObjectIds = relObjectIds;
            return this;
        }

        /**
         * Sets the value of {@link PipelineRelationsProps#getRelObjectIds}
         * @param relObjectIds Property relObjectIds: Ids of the associated resource. This parameter is required.
         *                     For now, only variable group ids are supported.
         * @return {@code this}
         */
        public Builder relObjectIds(java.util.List<? extends java.lang.Object> relObjectIds) {
            this.relObjectIds = relObjectIds;
            return this;
        }

        /**
         * Sets the value of {@link PipelineRelationsProps#getRelObjectType}
         * @param relObjectType Property relObjectType: Associated resource type. This parameter is required.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>VARIABLE_GROUP</li>
         *                      <li>OOS_APP_ID
         *                      For now, only VARIABLE GROUP is supported.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder relObjectType(java.lang.String relObjectType) {
            this.relObjectType = relObjectType;
            return this;
        }

        /**
         * Sets the value of {@link PipelineRelationsProps#getRelObjectType}
         * @param relObjectType Property relObjectType: Associated resource type. This parameter is required.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>VARIABLE_GROUP</li>
         *                      <li>OOS_APP_ID
         *                      For now, only VARIABLE GROUP is supported.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder relObjectType(com.aliyun.ros.cdk.core.IResolvable relObjectType) {
            this.relObjectType = relObjectType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PipelineRelationsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PipelineRelationsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PipelineRelationsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PipelineRelationsProps {
        private final java.lang.Object organizationId;
        private final java.lang.Object pipelineId;
        private final java.lang.Object relObjectIds;
        private final java.lang.Object relObjectType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.organizationId = software.amazon.jsii.Kernel.get(this, "organizationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pipelineId = software.amazon.jsii.Kernel.get(this, "pipelineId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.relObjectIds = software.amazon.jsii.Kernel.get(this, "relObjectIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.relObjectType = software.amazon.jsii.Kernel.get(this, "relObjectType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.organizationId = java.util.Objects.requireNonNull(builder.organizationId, "organizationId is required");
            this.pipelineId = java.util.Objects.requireNonNull(builder.pipelineId, "pipelineId is required");
            this.relObjectIds = java.util.Objects.requireNonNull(builder.relObjectIds, "relObjectIds is required");
            this.relObjectType = java.util.Objects.requireNonNull(builder.relObjectType, "relObjectType is required");
        }

        @Override
        public final java.lang.Object getOrganizationId() {
            return this.organizationId;
        }

        @Override
        public final java.lang.Object getPipelineId() {
            return this.pipelineId;
        }

        @Override
        public final java.lang.Object getRelObjectIds() {
            return this.relObjectIds;
        }

        @Override
        public final java.lang.Object getRelObjectType() {
            return this.relObjectType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("organizationId", om.valueToTree(this.getOrganizationId()));
            data.set("pipelineId", om.valueToTree(this.getPipelineId()));
            data.set("relObjectIds", om.valueToTree(this.getRelObjectIds()));
            data.set("relObjectType", om.valueToTree(this.getRelObjectType()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-devops.PipelineRelationsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PipelineRelationsProps.Jsii$Proxy that = (PipelineRelationsProps.Jsii$Proxy) o;

            if (!organizationId.equals(that.organizationId)) return false;
            if (!pipelineId.equals(that.pipelineId)) return false;
            if (!relObjectIds.equals(that.relObjectIds)) return false;
            return this.relObjectType.equals(that.relObjectType);
        }

        @Override
        public final int hashCode() {
            int result = this.organizationId.hashCode();
            result = 31 * result + (this.pipelineId.hashCode());
            result = 31 * result + (this.relObjectIds.hashCode());
            result = 31 * result + (this.relObjectType.hashCode());
            return result;
        }
    }
}
