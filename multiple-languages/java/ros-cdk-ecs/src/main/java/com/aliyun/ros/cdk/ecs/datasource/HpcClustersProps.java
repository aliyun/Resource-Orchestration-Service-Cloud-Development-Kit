package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>HpcClusters</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpcclusters
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:38.557Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.HpcClustersProps")
@software.amazon.jsii.Jsii.Proxy(HpcClustersProps.Jsii$Proxy.class)
public interface HpcClustersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property hpcClusterIds: The IDs of the HPC clusters.
     * <p>
     * You can specify up to 100 HPC cluster IDs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHpcClusterIds() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HpcClustersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HpcClustersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HpcClustersProps> {
        java.lang.Object hpcClusterIds;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link HpcClustersProps#getHpcClusterIds}
         * @param hpcClusterIds Property hpcClusterIds: The IDs of the HPC clusters.
         *                      You can specify up to 100 HPC cluster IDs.
         * @return {@code this}
         */
        public Builder hpcClusterIds(com.aliyun.ros.cdk.core.IResolvable hpcClusterIds) {
            this.hpcClusterIds = hpcClusterIds;
            return this;
        }

        /**
         * Sets the value of {@link HpcClustersProps#getHpcClusterIds}
         * @param hpcClusterIds Property hpcClusterIds: The IDs of the HPC clusters.
         *                      You can specify up to 100 HPC cluster IDs.
         * @return {@code this}
         */
        public Builder hpcClusterIds(java.util.List<? extends java.lang.Object> hpcClusterIds) {
            this.hpcClusterIds = hpcClusterIds;
            return this;
        }

        /**
         * Sets the value of {@link HpcClustersProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link HpcClustersProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HpcClustersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HpcClustersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HpcClustersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HpcClustersProps {
        private final java.lang.Object hpcClusterIds;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.hpcClusterIds = software.amazon.jsii.Kernel.get(this, "hpcClusterIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.hpcClusterIds = builder.hpcClusterIds;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getHpcClusterIds() {
            return this.hpcClusterIds;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getHpcClusterIds() != null) {
                data.set("hpcClusterIds", om.valueToTree(this.getHpcClusterIds()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.HpcClustersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HpcClustersProps.Jsii$Proxy that = (HpcClustersProps.Jsii$Proxy) o;

            if (this.hpcClusterIds != null ? !this.hpcClusterIds.equals(that.hpcClusterIds) : that.hpcClusterIds != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.hpcClusterIds != null ? this.hpcClusterIds.hashCode() : 0;
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
