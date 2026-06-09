package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>Group</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-group
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.467Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.GroupProps")
@software.amazon.jsii.Jsii.Proxy(GroupProps.Jsii$Proxy.class)
public interface GroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupId: The ID of the server group for which you want to add to or remove servers.
     * <p>
     * <blockquote>
     * <p>
     * To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the <a href="~~DescribeAllGroups~~">DescribeAllGroups</a> to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
        return null;
    }

    /**
     * Property groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
     * <p>
     * <blockquote>
     * <p>
     * To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the <a href="~~DescribeAllGroups~~">DescribeAllGroups</a> operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link GroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link GroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<GroupProps> {
        java.lang.Object groupId;
        java.lang.Object groupName;

        /**
         * Sets the value of {@link GroupProps#getGroupId}
         * @param groupId Property groupId: The ID of the server group for which you want to add to or remove servers.
         *                <blockquote>
         *                <p>
         *                To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the <a href="~~DescribeAllGroups~~">DescribeAllGroups</a> to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
         *                <p>
         *                </blockquote>
         * @return {@code this}
         */
        public Builder groupId(java.lang.Number groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getGroupId}
         * @param groupId Property groupId: The ID of the server group for which you want to add to or remove servers.
         *                <blockquote>
         *                <p>
         *                To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the <a href="~~DescribeAllGroups~~">DescribeAllGroups</a> to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
         *                <p>
         *                </blockquote>
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getGroupName}
         * @param groupName Property groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
         *                  <blockquote>
         *                  <p>
         *                  To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the <a href="~~DescribeAllGroups~~">DescribeAllGroups</a> operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
         *                  <p>
         *                  </blockquote>
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getGroupName}
         * @param groupName Property groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
         *                  <blockquote>
         *                  <p>
         *                  To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the <a href="~~DescribeAllGroups~~">DescribeAllGroups</a> operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
         *                  <p>
         *                  </blockquote>
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link GroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public GroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link GroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GroupProps {
        private final java.lang.Object groupId;
        private final java.lang.Object groupName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupId = builder.groupId;
            this.groupName = builder.groupName;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getGroupId() != null) {
                data.set("groupId", om.valueToTree(this.getGroupId()));
            }
            if (this.getGroupName() != null) {
                data.set("groupName", om.valueToTree(this.getGroupName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.GroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            GroupProps.Jsii$Proxy that = (GroupProps.Jsii$Proxy) o;

            if (this.groupId != null ? !this.groupId.equals(that.groupId) : that.groupId != null) return false;
            return this.groupName != null ? this.groupName.equals(that.groupName) : that.groupName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupId != null ? this.groupId.hashCode() : 0;
            result = 31 * result + (this.groupName != null ? this.groupName.hashCode() : 0);
            return result;
        }
    }
}
