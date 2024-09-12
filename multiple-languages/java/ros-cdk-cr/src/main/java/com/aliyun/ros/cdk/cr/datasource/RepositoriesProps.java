package com.aliyun.ros.cdk.cr.datasource;

/**
 * Properties for defining a <code>Repositories</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-repositories
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:24.804Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.datasource.RepositoriesProps")
@software.amazon.jsii.Jsii.Proxy(RepositoriesProps.Jsii$Proxy.class)
public interface RepositoriesProps extends software.amazon.jsii.JsiiSerializable {

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
     * Property repoNamespace: The namespace of repository.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRepoNamespace() {
        return null;
    }

    /**
     * Property status: The status of repository.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RepositoriesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RepositoriesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RepositoriesProps> {
        java.lang.Object refreshOptions;
        java.lang.Object repoNamespace;
        java.lang.Object status;

        /**
         * Sets the value of {@link RepositoriesProps#getRefreshOptions}
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
         * Sets the value of {@link RepositoriesProps#getRefreshOptions}
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
         * Sets the value of {@link RepositoriesProps#getRepoNamespace}
         * @param repoNamespace Property repoNamespace: The namespace of repository.
         * @return {@code this}
         */
        public Builder repoNamespace(java.lang.String repoNamespace) {
            this.repoNamespace = repoNamespace;
            return this;
        }

        /**
         * Sets the value of {@link RepositoriesProps#getRepoNamespace}
         * @param repoNamespace Property repoNamespace: The namespace of repository.
         * @return {@code this}
         */
        public Builder repoNamespace(com.aliyun.ros.cdk.core.IResolvable repoNamespace) {
            this.repoNamespace = repoNamespace;
            return this;
        }

        /**
         * Sets the value of {@link RepositoriesProps#getStatus}
         * @param status Property status: The status of repository.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RepositoriesProps#getStatus}
         * @param status Property status: The status of repository.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RepositoriesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RepositoriesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RepositoriesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RepositoriesProps {
        private final java.lang.Object refreshOptions;
        private final java.lang.Object repoNamespace;
        private final java.lang.Object status;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repoNamespace = software.amazon.jsii.Kernel.get(this, "repoNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.refreshOptions = builder.refreshOptions;
            this.repoNamespace = builder.repoNamespace;
            this.status = builder.status;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getRepoNamespace() {
            return this.repoNamespace;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getRepoNamespace() != null) {
                data.set("repoNamespace", om.valueToTree(this.getRepoNamespace()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.datasource.RepositoriesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RepositoriesProps.Jsii$Proxy that = (RepositoriesProps.Jsii$Proxy) o;

            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.repoNamespace != null ? !this.repoNamespace.equals(that.repoNamespace) : that.repoNamespace != null) return false;
            return this.status != null ? this.status.equals(that.status) : that.status == null;
        }

        @Override
        public final int hashCode() {
            int result = this.refreshOptions != null ? this.refreshOptions.hashCode() : 0;
            result = 31 * result + (this.repoNamespace != null ? this.repoNamespace.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            return result;
        }
    }
}
